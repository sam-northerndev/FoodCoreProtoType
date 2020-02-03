import Typography from "typography"
import lincoln from "typography-theme-lincoln"

lincoln.overrideThemeStyles = ({ scale }) => ({
  body: {
    ...scale(0),
  },
})

const typography = new Typography(lincoln)
export default typography
