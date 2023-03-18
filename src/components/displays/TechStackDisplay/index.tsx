import classNames from 'classnames'
import { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { SectionId } from 'utils/constants'
import { ReactComponent as BasicsSvg } from './assets/basics.svg'
// import { ReactComponent as VSCodeSvg } from './assets/vscode.svg'
import { ReactComponent as CodeQualitySvg } from './assets/codequality.svg'
import { ReactComponent as FigmaSvg } from './assets/figma.svg'
import { ReactComponent as TypescriptSvg } from './assets/typescript.svg'
import { ReactComponent as DockerSvg } from './assets/docker.svg'
import { ReactComponent as ReactSvg } from './assets/react.svg'
import useMediaQuery from 'utils/hooks/useMediaQuery'

const useStyles = createUseStyles(({ palette, typography }) => ({
  container: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '1rem',
    maxWidth: '80%',
  },
  subheading: {
    color: palette.primaryColor.main,
  },
  button: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    width: '4rem',
    height: '4rem',
    '@media (min-width: 769px)': {
      width: '6rem',
      height: '6rem',
    },
    '&:hover, &focus': {
      boxShadow: `0px 0px 10px 2px ${palette.primaryColor.main}`,
      borderRadius: '20px',
    },
    '& > svg': {
      width: '100%',
      height: '100%',
    },
  },
  description: {
    lineHeight: 1.5,
    fontSize: typography.fontSize.regular,
    minHeight: '7rem', // prevent content jumping
  },
  descriptionContainer: {
    margin: '0 auto',
    padding: '1rem',
    width: '80%',
    maxWidth: '46rem',
  },
  activeItemIndicator: {
    backgroundColor: palette.primaryColor.main,
    position: 'absolute',
    width: '3rem',
    height: '2px',
    bottom: '-0.5rem',
    left: 0,
    right: 0,
    margin: 'auto',
  },
}))

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
    description: `The three musketeers: JavaScript, HTML and CSS are the core technologies used to create and style web pages and web applications. These technologies are essential for creating dynamic, interactive and visually appealing web interfaces that can provide a seamless user experience.`,
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
    description: `Docker provides a consistent and reproducible environment for building, testing and deploying my applications. It eliminates the need for manual configuration and reduces the chances of compatibility issues between different environments, hence making it easier to collaborate.`,
    Icon: DockerSvg,
  },
  // {
  //   id: TechStackItemId.VSCODE,
  //   title: 'VS Code',
  //   description: `A powerful, lightweight and customizable code editor that provides a range of extensions to improve productivity and efficiency. With built-in support for popular web technologies and frameworks, VS Code helps me streamline the development process and make it easier to build high-quality web applications.`,
  //   Icon: VSCodeSvg,
  // },
  {
    id: TechStackItemId.CODE_QUALITY,
    title: 'Code quality & tools',
    description: `Good code quality and appearance makes it easier to identify and prevent bugs, add new features and collaborate with other developers. Proper versioning can help track changes and enables rollback to previous versions. A good set of tools affects maintainability and scalability of the codebase.`,
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
  const [itemId, setItemId] = useState(TechStackItemId.BASICS)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 769px)')
  const classes = useStyles()
  const currentItem = items.find(({ id }) => id === itemId) || items[0]

  return (
    <>
      <div className={classes.container}>
        {items.map(({ id, Icon }) => (
          <button
            key={`stack-${id}`}
            className={classNames(classes.button)}
            onClick={() => {
              setItemId(id)
              if (isMobile) {
                descriptionRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                })
              }
            }}
          >
            <Icon />
            {itemId === id && <span className={classes.activeItemIndicator} />}
          </button>
        ))}
      </div>
      <div
        ref={descriptionRef}
        id={SectionId.TECH_STACK_DESCRIPTION}
        className={classes.descriptionContainer}
      >
        <h3 className={classes.subheading}>{currentItem.title}</h3>
        <p className={classes.description}>{currentItem.description}</p>
      </div>
    </>
  )
}

export default TechStackDisplay
