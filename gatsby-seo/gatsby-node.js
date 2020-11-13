const path = require(`path`);

const {createFilePath} = require(`gatsby-source-filesystem`);
  // gatsby-source-filesystem -- плагін для створення ярликів адреси
    // createFilePath -- метод для створення ярликів
      //Приймає на вхід:
        // node - об'єкт з файлами (вузлами)
        // getNode - надає конкретний файл  (вузол)
        // basePath - тека, у котрій знаходяться елементи котрі оброблятимуться (??)

  exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({node, getNode, basePath: `pages`});

      createNodeField({ // створює ярлики для виділених вузлів,
                            //за адресою:
                            //node {fields {slug}}
        node,
        name: 'slug',
        value: slug,
      })

    }
}

exports.createPages = async ({ graphql, actions }) => {
    // createPages - створює в БД нові елементи
  const { createPage } = actions; // createPage- власне функція,
        //котра відповідає за додавання конкретного елемента в БД

    // Отримуємо згенеровані slug-поля:
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach( //перебираємо всі елементи
    ({node}, i, src) => { //Отримуємо вузол
      createPage({ // і створюємо нове посилання
        path: node.fields.slug, // path - нова адреса
        component: path.resolve('./src/templates/blog-post.js'), // component - компонент, котрий буде розміщено за даною адресою
        context: {
          slug: node.fields.slug, // контекст передається до компонента у якості GQL змінних
        }
      })
    }
  )
}