const scrollToSection = (ref: any) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth',
  })
}

export default scrollToSection
