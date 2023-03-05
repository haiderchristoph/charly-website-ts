import classNames from 'classnames'
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { ThemeColor, Typography } from 'utils/constants'
import { ReactComponent as BasicsSvg } from './assets/basics.svg'
import { ReactComponent as VSCodeSvg } from './assets/vscode.svg'
import { ReactComponent as CodeQualitySvg } from './assets/codequality.svg'
import { ReactComponent as FigmaSvg } from './assets/figma.svg'
import { ReactComponent as TypescriptSvg } from './assets/typescript.svg'
import { ReactComponent as DockerSvg } from './assets/docker.svg'
import { ReactComponent as ReactSvg } from './assets/react.svg'

const useStyles = createUseStyles({
  container: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '1rem',
    maxWidth: '80%',
  },
  svg: {
    width: '6rem',
    height: '6rem',
  },
  subheading: {
    color: ThemeColor.primaryMain,
  },
  button: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    '&:hover, &focus': {
      boxShadow: `0px 0px 10px 2px ${ThemeColor.primaryMain}`,
      borderRadius: '20px',
    },
  },
  description: {
    lineHeight: 1.5,
    fontSize: Typography.fontSizeText,
    minHeight: '7rem', // prevent content jumping
  },
  descriptionContainer: {
    margin: '0 auto',
    padding: '1rem',
    maxWidth: '80%',
  },
  activeItemIndicator: {
    backgroundColor: ThemeColor.primaryMain,
    position: 'absolute',
    width: '3rem',
    height: '2px',
    bottom: '-0.5rem',
    left: 0,
    right: 0,
    margin: 'auto',
  },
})

enum TechStackItemId {
  BASICS = 'basics',
  REACT = 'react',
  TYPESCRIPT = 'typescript',
  DOCKER = 'docker',
  VSCODE = 'vscode',
  CODE_QUALITY = 'code-quality',
  FIGMA = 'figma',
}

const items = [
  {
    id: TechStackItemId.BASICS,
    title: 'JS, HTML & CSS',
    description: `The three musketeers: JavaScript, HTML, and CSS are the core technologies used to create and style web pages and web applications. These technologies are essential for creating dynamic, interactive, and visually appealing web interfaces that can provide a seamless user experience.`,
    Icon: BasicsSvg,
  },
  {
    id: TechStackItemId.REACT,
    title: 'React',
    description: `React JS uses a virtual DOM to efficiently update only the necessary parts of the UI, resulting in fast and responsive user interfaces. Additionally, a range of built-in hooks and its component-based architecture promotes code reusability, maintainability and scalability.`,
    Icon: ReactSvg,
  },
  {
    id: TechStackItemId.TYPESCRIPT,
    title: 'Typescript',
    description: `Typescript provides type checking in JavaScript code, which can help catch errors and bugs earlier in the development process, leading to more robust and reliable code. It helps me to maintain a more efficient development workflow and to create high-quality frontend applications.`,
    Icon: TypescriptSvg,
  },
  {
    id: TechStackItemId.DOCKER,
    title: 'Docker',
    description: `Docker provides a consistent and reproducible environment for building, testing, and deploying my applications. It eliminates the need for manual configuration and reduces the chances of compatibility issues between different environments, hence making it easier to collaborate.`,
    Icon: DockerSvg,
  },
  {
    id: TechStackItemId.VSCODE,
    title: 'VS Code',
    description: `A powerful, lightweight and customizable code editor that provides a range of extensions to improve productivity and efficiency. With built-in support for popular web technologies and frameworks, VS Code helps me streamline the development process and make it easier to build high-quality web applications.`,
    Icon: VSCodeSvg,
  },
  {
    id: TechStackItemId.CODE_QUALITY,
    title: 'Code quality & tools',
    description: `Good code quality and appearance makes it easier to identify and prevent bugs, add new features, and collaborate with other developers. Proper versioning can help track changes and enables rollback to previous versions. A good set of tools affects maintainability and scalability of the codebase.`,
    Icon: CodeQualitySvg,
  },
  {
    id: TechStackItemId.FIGMA,
    title: 'Figma',
    description: `Figma is a feature rich design tool that allows me to design web applications and logos. It encourages to collaborate on designs and makes it easy to share components and assets with others. Figma's comprehensive and interactive design systems allows me to easily translate my designs into code.`,
    Icon: FigmaSvg,
  },
]

/**
 * TechStackDisplay
 */
const TechStackDisplay = () => {
  const classes = useStyles()
  const [itemId, setItemId] = useState(TechStackItemId.BASICS)

  const currentItem = items.find(({ id }) => id === itemId) || items[0]

  return (
    <>
      <div className={classes.container}>
        {items.map(({ id, Icon }) => (
          <>
            <button
              className={classNames(classes.button)}
              onClick={() => setItemId(id)}
            >
              <Icon id={id} className={classes.svg} />
              {itemId === id && (
                <span className={classes.activeItemIndicator} />
              )}
            </button>
          </>
        ))}
      </div>
      <div className={classes.descriptionContainer}>
        <h3 className={classes.subheading}>{currentItem.title}</h3>
        <p className={classes.description}>{currentItem.description}</p>
      </div>
    </>
  )
}

export default TechStackDisplay
