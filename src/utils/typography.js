import Typography from "typography"
import lincoln from "typography-theme-lincoln"

lincoln.overrideThemeStyles = ({ scale }) => ({
  body: {
    ...scale(0.2),
  },
  h1: {
    ...scale(0.2),
  },
  h2: {
    ...scale(0.2),
  },
  h3: {
    ...scale(0.2),
  },
  h4: {
    ...scale(0.2),
  },
  p: {
    ...scale(0.2),
  },
  input: {
    ...scale(0.2),
  },
  button: {
    ...scale(0.2),
  },
})

const typography = new Typography(lincoln)
export default typography
