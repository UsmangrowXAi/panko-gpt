import 'dotenv/config'
import mongoose from 'mongoose'
import atlasClient, { AtlasClient, AtlasError } from 'mongodb-atlas-api-client'
import { getSettings, updateSettings } from '../../db/Settings'
import { AtlasSearchIndexDefinition } from '../../api/types'
import { atlasDefaults } from '../../constants'

export const connectToMongoDB = async (mongoDbUrl: string, dbName: string) => {
	return await mongoose.connect(mongoDbUrl, {
		dbName
	})
}

export const getAtlasApiClient = async (): Promise<AtlasClient | null> => {
	const settings = await getSettings()
	if (
		!settings?.atlasPrivateKey ||
		!settings?.atlasPublicKey ||
		!settings?.atlasProjectId
	) {
		return null
	}
	const client = atlasClient({
		publicKey: settings.atlasPublicKey,
		privateKey: settings.atlasPrivateKey,
		projectId: settings.atlasProjectId,
		baseUrl: 'https://cloud.mongodb.com/api/atlas/v1.0'
	})
	return client
}

export const getAtlasSearchIndex = async (): Promise<
	AtlasSearchIndexDefinition | { error: string } | false
> => {
	const settings = await getSettings()
	let pankoIndex: AtlasSearchIndexDefinition | false = false
	const atlasApiClient = await getAtlasApiClient()
	if (!atlasApiClient) {
		console.log('Error getting atlas client')
		return pankoIndex
	}
	if (!settings?.atlasCluster || !settings?.atlasDatabase) {
		console.log('No cluster or database name specified')
		return pankoIndex
	}
	const indexes: AtlasSearchIndexDefinition[] | AtlasError =
		await atlasApiClient.atlasSearch.getAll(
			settings?.atlasCluster,
			settings?.atlasDatabase,
			'vectordatas'
		)
	if ('error' in indexes) {
		console.error(
			`Atlas API Error - Could not get atlas indexes with data cluster ${settings?.atlasCluster} and database ${settings?.atlasDatabase}. Error message:`,
			indexes.error
		)
		return pankoIndex
	}
	try {
		indexes.forEach(index => {
			if (index.name === atlasDefaults.indexName) {
				pankoIndex = index
			}
		})
	} catch (e) {
		console.error('Error iterating indexes', e)
	}
	return pankoIndex
}

export const createAtlasSearchIndex = async (): Promise<
	AtlasSearchIndexDefinition | { error: string }
> => {
	const settings = await getSettings()
	const atlasApiClient = await getAtlasApiClient()
	if (!atlasApiClient) {
		return { error: 'Could not get atlas client' }
	}
	const indexBody = {
		name: atlasDefaults.indexName,
		collectionName: 'vectordatas',
		database: settings?.atlasDatabase,
		mappings: {
			dynamic: true,
			fields: {
				botId: {
					type: 'token'
				},
				content_embedding: {
					dimensions: 1536,
					similarity: 'cosine',
					type: 'knnVector'
				}
			}
		}
	}
	try {
		const index = await atlasApiClient.atlasSearch.create(
			settings?.atlasCluster!,
			indexBody
		)
		updateSettings({ hasVectorDataSearchIndex: true })
		return index
	} catch (e: any) {
		return { error: e.message }
	}
}

export default connectToMongoDB
