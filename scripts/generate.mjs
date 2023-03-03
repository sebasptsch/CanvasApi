import { generate as openApiGenerate } from 'openapi-typescript-codegen' ;
import SwaggerParser from '@apidevtools/swagger-parser';

async function generate() {
  const canvasOpenApiRef = 'https://canvas.uts.edu.au/doc/api';
  const rootDoc = 'api-docs.json'

  const fetchedRef = await fetch(`${canvasOpenApiRef}/${rootDoc}`).then((res) => res.json());

    const reqs = fetchedRef.apis.map((api) => {
        const relativePath = api.path;
        const url = `${canvasOpenApiRef}${relativePath}`;
        return fetch(`https://converter.swagger.io/api/convert?url=${url}`).then((res) => res.json());
    });

    const responses = await Promise.all(reqs);

    const pathsObjects = responses.map((res) => res.paths);

    const paths = pathsObjects.reduce((acc, cur) => {
        return {
            ...acc,
            ...cur
        }
    }, {});

    const componentObjects = responses.map((res) => res.components);

    const schemaObjects = componentObjects.map((comp) => comp.schemas);

    const schemas = schemaObjects.reduce((acc, cur) => {
        return {
            ...acc,
            ...cur
        }
    }, {});

    console.log(componentObjects);

    const merged = {
        ...responses[0],
        paths,
        components: {
            schemas
        }
    };

    


    console.log(merged);


    // const newFormat = await fetch(`https://converter.swagger.io/api/convert?url=${canvasOpenApiRef}`).then((res) => res.json());

  await openApiGenerate({
    input: merged,
    output: './src',
    clientName: 'CanvasApi',
    exportCore: true,
    exportModels: true,
    exportSchemas: false,
    exportServices: true,
  });
}
generate();