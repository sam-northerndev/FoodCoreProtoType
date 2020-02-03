import Typography from "typography"
import lincoln from "typography-theme-lincoln"

lincoln.overrideThemeStyles = ({ scale }) => ({
  body: {
    ...scale(0),
  },
  h1: {
    ...scale(0.6),
  },
  h2: {
    ...scale(0),
  },
  h3: {
    ...scale(0),
  },
  h4: {
    ...scale(0),
  },
  p: {
    ...scale(0),
  },
  input: {
    ...scale(0),
  },
  button: {
    ...scale(0),
  },
})

const typography = new Typography(lincoln)
export default typography
