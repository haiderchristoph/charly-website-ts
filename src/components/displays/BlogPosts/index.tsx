import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({ palette, typography }) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  article: {
    backgroundColor: '#252525',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '21rem',
    width: '20rem',
    margin: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'cover',
  },
  title: {
    padding: '0.75rem',
    fontWeight: 'bold',
    fontSize: typography.fontSize.large,
    textAlign: 'center',
    color: palette.text,
  },
  description: {
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
    color: '#666',
  },
}))

const articles = [
  {
    id: 1,
    title:
      'Light or Dark? How to Add Theming to Your React App with JSS and TypeScript',
    description:
      'As light and dark themes seem to become a mandatory feature, it’s a perfect opportunity to set up theming and to showcase another important React feature: Contexts.',
    image: 'https://picsum.photos/400/400',
  },
  {
    id: 2,
    title: 'Styling React Components Made Easy with JSS',
    description:
      'JSS (or “JavaScript Style Sheets”) is a CSS-in-JS library that allows you to write styles in JavaScript and apply them to your React components. ',
    image: 'https://picsum.photos/400/400',
  },
  {
    id: 3,
    title: 'Article Title 3',
    description: 'This is a short description of the third article',
    image: 'https://picsum.photos/400/400',
  },
  {
    id: 4,
    title: 'Article Title 4',
    description: 'This is a short description of the fourth article',
    image: 'https://picsum.photos/400/400',
  },
]

function BlogArticles() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {articles.map((article) => (
        <div key={article.id} className={classes.article}>
          <img
            className={classes.image}
            src={article.image}
            alt={article.title}
          />
          <div className={classes.title}>{article.title}</div>
          <div className={classes.description}>{article.description}</div>
        </div>
      ))}
    </div>
  )
}

export default BlogArticles
