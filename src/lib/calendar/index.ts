import Cell from "./calendar-cell.svelte"
import Day from "./calendar-day.svelte"
import Grid from "./calendar-grid.svelte"
import GridBody from "./calendar-grid-body.svelte"
import GridHead from "./calendar-grid-head.svelte"
import GridRow from "./calendar-grid-row.svelte"
import HeadCell from "./calendar-head-cell.svelte"
import Header from "./calendar-header.svelte"
import Heading from "./calendar-heading.svelte"
import MonthSelect from "./calendar-month-select.svelte"
import NextButton from "./calendar-next-button.svelte"
import PrevButton from "./calendar-prev-button.svelte"
import Root from "./calendar-root.svelte"
import YearSelect from "./calendar-year-select.svelte"

const Calendar = Object.assign(Root, {
  Root,
  Day,
  Grid,
  GridBody,
  Cell,
  GridHead,
  HeadCell,
  GridRow,
  Header,
  Heading,
  MonthSelect,
  NextButton,
  PrevButton,
  YearSelect,
})

export {
  Calendar,
  Cell,
  Day,
  Grid,
  GridBody,
  GridHead,
  GridRow,
  HeadCell,
  Header,
  Heading,
  MonthSelect,
  NextButton,
  PrevButton,
  Root,
  YearSelect,
}
