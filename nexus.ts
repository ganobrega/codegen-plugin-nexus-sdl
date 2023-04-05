import { PluginFunction } from '@graphql-codegen/plugin-helpers';
import { convertSDL } from 'nexus'
import { printSchema  } from 'graphql'

export const plugin: PluginFunction = (schema, documents) => {
    return convertSDL(printSchema(schema));
};