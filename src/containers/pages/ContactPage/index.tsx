import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { SectionId, ThemeColor, Typography } from 'utils/constants'
import { EmailJSCredentials } from 'utils/credentials'
import Page from 'containers/pages/Page'
import Footer from 'containers/pages/Footer'
import emailjs from '@emailjs/browser'

const MESSAGE_MAX_LENGTH = 300

// This is a helper object before intl is in place
const pageText = {
  heading: 'Contact',
  question: 'Have a question or want to work together?',
  emailPlaceholder: 'Your email',
  namePlaceholder: 'Your name',
  messagePlaceholder: 'Your message...',
  remainingCharacters: 'Remaining characters: ',
  submit: 'Submit',
  sending: 'Sending...',
  resultSuccessHeading: 'Thank you for your message!',
  resultSuccessText: `I'll come back to you as soon as I read your message. I usually
  answer within 48 hours.`,
  resultErrorHeading: 'Oh noes!',
  resultErrorText: `Something went wrong while submitting your message. Please reload the page and try it again!`,
}

const useStyles = createUseStyles({
  page: {
    position: 'relative',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heading: {
    fontSize: Typography.fontSizeHeadline,
  },
  question: {
    fontSize: '1.125rem',
    color: ThemeColor.primaryMain,
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '78rem',
    flexDirection: 'column',
  },
  resultContainer: {
    marginTop: '1rem',
    width: '100%',
    maxWidth: '30rem',
    textAlign: 'center',
    visibility: 'hidden',
    '&$resultContainer_visible': {
      animation: '$resultContainerIn 0.75s forwards',
      visibility: 'visible',
    },
  },
  resultContainer_visible: {},
  '@keyframes resultContainerIn': {
    to: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translate(0%, 25%)',
    },
  },
  resultHeading: {
    fontSize: Typography.fontSizeTitle,
    color: ThemeColor.primaryMain,
  },
  resultText: {
    marginTop: '1rem',
    fontSize: Typography.fontSizeText,
  },
  formContainer: {
    marginTop: '1rem',
    width: '100%',
    maxWidth: '30rem',
    '&$formContainer_notVisible': {
      animation: '$formContainerOut 0.75s forwards',
    },
  },
  '@keyframes formContainerOut': {
    to: {
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate(0%, -25%)',
    },
  },
  formContainer_notVisible: {},
  textInput: {
    width: '-webkit-fill-available',
    margin: '0.5rem 0',
    border: '2px solid transparent',
    fontSize: Typography.fontSizeText,
    padding: '0.5rem',
    outline: 'none',
    backgroundColor: '#332F2E',
    color: 'white',
    resize: 'vertical',
    '&::placeholder': {
      color: 'white',
      opacity: '0.4',
    },
    '&:focus-within': {
      border: `2px solid ${ThemeColor.primaryMain}`,
    },
  },
  submitButton: {
    cursor: 'pointer',
    fontSize: '1.125rem',
    padding: '0.5rem',
    minWidth: '7rem',
    backgroundColor: 'transparent',
    border: `1px solid white`,
    color: 'white',
    '&$submitButton_wasHovered': {
      animation: '$buttonFillOut 0.5s forwards',
    },
    '&:hover, &:focus': {
      border: `1px solid ${ThemeColor.primaryMain}`,
      animation: '$buttonFillIn 1s forwards',
    },
  },
  submitButton_wasHovered: {},
  '@keyframes buttonFillIn': {
    to: {
      backgroundColor: ThemeColor.primaryMain,
    },
  },
  '@keyframes buttonFillOut': {
    from: {
      backgroundColor: ThemeColor.primaryMain,
    },
    to: {
      backgroundColor: 'transparent',
    },
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textArea: {
    minHeight: '10em',
  },
})

const FormSendState = {
  IDLE: 'FormSendState/idle',
  SENDING: 'FormSendState/sending',
  SEND_SUCCESS: 'FormSendState/sendSuccess',
  SEND_ERROR: 'FormSendState/sendError',
}

/**
 * ContactPage
 */
const ContactPage = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [wasHovered, setWasHovered] = useState(false)
  const [formSendState, setFormSendState] = useState(FormSendState.IDLE)
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {
    if (
      formSendState === FormSendState.SEND_SUCCESS ||
      formSendState === FormSendState.SEND_ERROR ||
      formSendState === FormSendState.SENDING
    ) {
      setTimeout(() => setShowForm(false), 750)
    }
  }, [setShowForm, formSendState])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setFormSendState(FormSendState.SENDING)
    emailjs
      .sendForm(
        EmailJSCredentials.SERVICE_ID,
        EmailJSCredentials.TEMPLATE_ID,
        event.target as unknown as string,
        EmailJSCredentials.USER_ID
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setFormSendState(FormSendState.SEND_SUCCESS)
          } else {
            setFormSendState(FormSendState.SEND_ERROR)
          }
        },
        (error) => {
          setFormSendState(FormSendState.SEND_ERROR)
        }
      )
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onSet: (value: any) => void
  ) => onSet(event.target.value)

  return (
    <Page id={SectionId.CONTACT} isFullHeight={true} className={classes.page}>
      <div className={classes.container}>
        <h2 className={classes.heading}>{pageText.heading}</h2>
        <div className={classes.contentContainer}>
          {showForm && (
            <form
              className={classNames(classes.formContainer, {
                [classes.formContainer_notVisible]:
                  formSendState === FormSendState.SEND_ERROR ||
                  formSendState === FormSendState.SEND_SUCCESS,
              })}
              onSubmit={handleSubmit}
            >
              <div className={classes.question}>{pageText.question}</div>
              <div>
                <input
                  className={classes.textInput}
                  id="name"
                  name="name"
                  onChange={(event) => handleChange(event, setName)}
                  placeholder={pageText.namePlaceholder}
                  required={true}
                  type="text"
                  value={name}
                />
                <input
                  className={classes.textInput}
                  id="email"
                  name="email"
                  onChange={(event) => handleChange(event, setEmail)}
                  placeholder={pageText.emailPlaceholder}
                  required={true}
                  type="email"
                  value={email}
                />
                <textarea
                  className={classNames(classes.textInput, classes.textArea)}
                  id="message"
                  name="message"
                  maxLength={MESSAGE_MAX_LENGTH}
                  onChange={(event) => handleChange(event, setMessage)}
                  placeholder={pageText.messagePlaceholder}
                  required={true}
                  value={message}
                />
              </div>
              <div className={classes.buttonContainer}>
                <div>
                  {`${pageText.remainingCharacters}${
                    MESSAGE_MAX_LENGTH - message.length
                  }`}
                </div>
                <button
                  className={classNames(classes.submitButton, {
                    [classes.submitButton_wasHovered]: wasHovered,
                  })}
                  disabled={formSendState !== FormSendState.IDLE}
                  type="submit"
                  onMouseEnter={() => setWasHovered(true)}
                >
                  {formSendState === FormSendState.IDLE
                    ? pageText.submit
                    : pageText.sending}
                </button>
              </div>
            </form>
          )}
          {!showForm && (
            <div
              className={classNames(classes.resultContainer, {
                [classes.resultContainer_visible]:
                  formSendState === FormSendState.SEND_SUCCESS ||
                  formSendState === FormSendState.SEND_ERROR,
              })}
            >
              <div className={classes.resultHeading}>
                {formSendState === FormSendState.SEND_SUCCESS
                  ? pageText.resultSuccessHeading
                  : pageText.resultErrorHeading}
              </div>
              <div className={classes.resultText}>
                {formSendState === FormSendState.SEND_SUCCESS
                  ? pageText.resultSuccessText
                  : pageText.resultErrorText}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </Page>
  )
}

export default ContactPage
