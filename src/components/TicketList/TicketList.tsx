// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'

// // import { searchInit as init, ticketsLoad as load } from '../../redux/Actions'
// import ShowMore from '../ShowMore/ShowMore'
// import { State } from '../../types'
// import Loading from '../Loading/Loading'
// import format from '../../services/Formatter'
// import { useGetSessionIDQuery } from '../../services/ListService'

// import classes from './TicketList.module.scss'

// type Properties = {
//   state: State
//   searchInit: () => void
//   ticketsLoad: (id: string) => void
// }

// const TicketList: React.FC<Properties> = ({ state, searchInit, ticketsLoad }) => {
//   const id = state.api.sessionID
//   const list = state.api.tickets
//   const filters = state.checkbox.checkboxes
//   const { pagination } = state.loading

//   const { data: searchId } = useGetSessionIDQuery()
//   console.log(searchId)

//   // const { data } = useGetListQuery(searchId, {
//   //   skip: !searchId,
//   // })

//   // const sessionInit = async () => {
//   //   await
//   // }

//   // const loadList = async (id: string) => {
//   //   const { data } = useGetListQuery(id)
//   // }

//   // useEffect(() => {
//   //   searchInit()
//   // }, [])

//   // useEffect(() => {
//   //   if (!state.api.enough && id) {
//   //     ticketsLoad(id)
//   //   }
//   // })

//   const [ticketList, showMoreVisible] = format(filters, list, pagination)

//   return (
//     <>
//       <div className={classes.ticketlist}>{ticketList || <Loading />}</div>
//       {showMoreVisible && <ShowMore />}
//     </>
//   )
// }

// const mapStateToProperties = (state: State) => {
//   return {
//     state,
//   }
// }

// // const mapDispatchToProperties = {
// //   searchInit: init,
// //   ticketsLoad: load,
// // }

// export default connect(mapStateToProperties, mapDispatchToProperties)(TicketList)

const fuck = 'fuck'
export default fuck
