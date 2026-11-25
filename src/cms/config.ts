import { defineCmsConfig } from '@sourcepoetry/astro-sveltia'

export const cmsConfig = defineCmsConfig({
  backend: {
    name: 'github',
    repo: 'Trev7or23/melissa-portfolio',
    branch: 'main',
  },
  media_folder: 'src/assets/uploads',
  public_folder: '/src/assets/uploads',
  output: {
    omit_empty_optional_fields: true,
  },

  slug: {
    clean_accents: true,
  },

  collections: [
    {
      name: 'services',
      astro: {
        pattern: '**/*.md',
        bodyMode: 'document',
      },
      label: 'Servicios',
      label_singular: 'Servicio',
      folder: 'src/content/services',
      extension: 'md',
      create: true,
      delete: true,
      identifier_field: 'title',
      summary: '{{title}}',
      sortable_fields: ['title'],
      fields: [
        {
          name: 'body',
          label: 'Contenido',
          widget: 'markdown',
        },
        {
          name: 'title',
          label: 'Titulo',
          widget: 'string',
        },
        {
          name: 'tag',
          label: 'Etiqueta',
          widget: 'string',
        },
        {
          name: 'characteristics',
          label: 'caracteristicas',
          label_singular: 'caracteristica',
          widget: 'list',
          min: 1,
          max: 3,
          default: [''],
        },
        {
          name: 'icon',
          label: 'icono',
          widget: 'select',
          options: ['draw', 'email', 'lightning-bolt', 'file-document-edit'],
        },
        {
          name: 'order',
          label: 'Orden',
          widget: 'number',
          value_type: 'int',
          required: false,
          hint: 'Menor número = aparece primero en los servicios',
        },
        {
          name: 'cta',
          label: 'CTA',
          widget: 'object',
          fields: [
            {
              label: 'Texto',
              name: 'text',
              widget: 'string',
            },
            {
              label: 'Url De Whatsapp',
              name: 'url',
              widget: 'string',
              pattern: ['^https?://.*', 'Must Be A Valid Link'],
            },
            {
              name: 'icon',
              label: 'Icono',
              widget: 'select',
              options: ['whatsapp', 'message', 'send'],
            },
          ],
        },
      ],
    },
    {
      name: 'artworks',
      astro: { pattern: '**/*.md', image: 'local' },
      label: 'Obras',
      label_singular: 'Obra',
      folder: 'src/content/artworks',
      extension: 'md',
      create: true,
      delete: true,
      identifier_field: 'title',
      summary: '{{title}} · {{year}}',
      sortable_fields: ['order', 'year', 'title'],
      fields: [
        {
          name: 'title',
          label: 'Título',
          widget: 'string',
        },
        {
          name: 'year',
          label: 'Año',
          widget: 'number',
          value_type: 'int',
          min: 1900,
          max: 2100,
        },
        {
          name: 'series',
          label: 'Serie',
          widget: 'string',
        },
        {
          name: 'kind',
          label: 'Tipo',
          widget: 'select',
          options: [
            {
              label: 'Obra maestra',
              value: 'obra-maestra',
            },
            {
              label: 'Serie',
              value: 'serie',
            },
            {
              label: 'Estudio',
              value: 'estudio',
            },
            {
              label: 'Encargo',
              value: 'encargo',
            },
          ],
        },
        {
          name: 'technique',
          label: 'Técnica',
          widget: 'string',
          hint: 'Ej.: Grafito 9B a 4H y difumino',
        },
        {
          name: 'support',
          label: 'Soporte',
          widget: 'string',
          hint: 'Ej.: Grafito puro sobre papel de algodón',
        },
        {
          name: 'dimensions',
          label: 'Dimensiones',
          widget: 'string',
          hint: 'Ej.: 70 × 100 cm',
        },
        {
          name: 'availability',
          label: 'Disponibilidad',
          widget: 'select',
          options: [
            {
              label: 'Disponible para colección',
              value: 'Disponible para colección',
            },
            {
              label: 'Disponible',
              value: 'Disponible',
            },
            {
              label: 'Colección privada',
              value: 'Colección privada',
            },
          ],
        },
        {
          name: 'description',
          label: 'Descripción',
          widget: 'text',
          required: false,
        },
        {
          name: 'curatorialStatement',
          label: 'Texto curatorial',
          widget: 'text',
          required: false,
        },
        {
          name: 'image',
          label: 'Imagen',
          widget: 'image',
          required: false,
          hint: 'Subí una foto o pegá una URL externa.',
        },
        {
          name: 'order',
          label: 'Orden',
          widget: 'number',
          value_type: 'int',
          required: false,
          hint: 'Menor número = aparece primero en la galería.',
        },
      ],
    },
    {
      name: 'biography',
      label: 'Biografía',
      astro: {
        pattern: '**/*.md',
        image: 'local',
      },
      files: [
        {
          name: 'biography',
          label: 'Biografía',
          file: 'src/data/biography.md',
          fields: [
            {
              name: 'name',
              label: 'Nombre',
              widget: 'string',
            },
            {
              name: 'role',
              label: 'Rol',
              widget: 'string',
              hint: 'Ej.: Artista visual',
            },
            {
              name: 'image',
              label: 'Foto de la artista',
              widget: 'image',
              required: false,
              hint: 'Retrato exclusivo para la sección de biografía, no una obra.',
            },
            {
              name: 'imageAlt',
              label: 'Texto alternativo',
              widget: 'string',
              required: false,
              hint: 'Descripción de la foto para accesibilidad.',
            },
          ],
        },
      ],
    },
  ],
})
