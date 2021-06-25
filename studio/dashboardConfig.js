export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d5fb81243afd5ab1e3bff5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mgkyze6m',
                  apiId: 'f2a5014a-1e47-40af-8d55-5ff1e80a7983'
                },
                {
                  buildHookId: '60d5fb82243afd5adfe3c607',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sp727e51',
                  apiId: 'f0e736d0-3445-4aa0-9c8e-0f3aadc8f55f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iam-amanxz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sp727e51.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
