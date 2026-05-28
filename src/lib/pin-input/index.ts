import Cell from "./pin-input-cell.svelte"
import Root from "./pin-input-root.svelte"

const PinInput = Object.assign(Root, {
  Root,
  Cell,
})

export { Cell, PinInput, Root }
