import Cell from "./range-calendar-cell.svelte"
import Day from "./range-calendar-day.svelte"
import Grid from "./range-calendar-grid.svelte"
import GridBody from "./range-calendar-grid-body.svelte"
import GridHead from "./range-calendar-grid-head.svelte"
import GridRow from "./range-calendar-grid-row.svelte"
import HeadCell from "./range-calendar-head-cell.svelte"
import Header from "./range-calendar-header.svelte"
import Heading from "./range-calendar-heading.svelte"
import MonthSelect from "./range-calendar-month-select.svelte"
import NextButton from "./range-calendar-next-button.svelte"
import PrevButton from "./range-calendar-prev-button.svelte"
import Root from "./range-calendar-root.svelte"
import YearSelect from "./range-calendar-year-select.svelte"

const RangeCalendar = Object.assign(Root, {
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
  RangeCalendar,
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
