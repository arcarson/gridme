const percentage = (value, total) => {
  return (value/total) * 100 + "%"
}


const generateCols = (numberOfCols, colSpacing) => {
  const cols = {}

  const colStyles = {
    flexGrow: 1,
    paddingLeft: colSpacing
  }

  for (let i = 1; i <= numberOfCols; i++) {
    cols[`col${i}`] = Object.assign({}, colStyles, {width: percentage(i, numberOfCols)})
  }

  return cols
}


export default function generateGrid(numberOfCols = 12, colSpacing = "1rem") {
  const grid = {
    container: {
      display: "flex",
      marginLeft: `-${colSpacing}`,
      width: "100%"
    }
  }

  Object.assign(grid, generateCols(numberOfCols, colSpacing))

  return grid
}
