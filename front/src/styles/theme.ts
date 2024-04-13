import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// ここにページ共通のカラーテーマを宣言する
let theme = createTheme({
  palette: {
    primary: {
      main: '#3EA8FF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

theme = createTheme(theme, {
  palette: {
    background: {
      main: '#e6f2ff',
    },
  },
})

export default theme
