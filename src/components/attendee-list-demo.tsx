// import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
// import { IconButton } from "./icon-button";
// import { Table } from "./table/table";
// import { TableHeader } from "./table/table-header";
// import { TableCell } from "./table/table-cell";
// import { TableRow } from "./table/table-row";
// import { ChangeEvent, useEffect, useState } from "react";


// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import 'dayjs/locale/pt-br'


// dayjs.extend(relativeTime);
// dayjs.locale('pt-br')

// export function AttendeeList() {

//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);
//     const [attendees, setAttendees] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
//             .then(res => res.json())
//             .then(data => {
//                 setAttendees(data.attendees)
//             })
//     }, [])

//     const totalPages = Math.ceil(attendees.length / 10);

//     function onSearchInput(event: ChangeEvent<HTMLInputElement>) {
//         setSearch(event.target.value)
//     }

//     function gotToNextPage() {
//         setPage(page + 1)
//     }

//     function goToLastPage() {
//         setPage(totalPages)
//     }

//     function goToFirstPage() {
//         setPage(1)
//     }

//     function goToPreviousPage() {
//         setPage(page - 1)
//     }


//     return (
//         <div className="flex flex-col gap-4">
//             <div className="flex gap-3 items-center">
//                 <h1 className="text-2xl font-bold">Participantes</h1>

//                 <div className="px-3 py-1.5 border w-72 border-white/10 rounded-lg  flex items-center gap-3">
//                     <Search className="size-4 text-emerald-300" />
//                     <input onChange={onSearchInput} className="bg-transparent flex-1 outline-none  border-0 p-0 text-sm" type="text" placeholder="Buscar participante" />
//                 </div>
//             </div>


//             <Table>
//                 <thead>
//                     <tr className="border-b border-white/10 ">
//                         <TableHeader style={{ width: 48 }}>
//                             <input className="size-4 bg-black/20 rounded border-white/10 checked:bg" type="checkbox" name="" id="" />
//                         </TableHeader>
//                         <TableHeader>Código</TableHeader>
//                         <TableHeader>Participante</TableHeader>
//                         <TableHeader>Data de Inscrição</TableHeader>
//                         <TableHeader>Data de check-in</TableHeader>
//                         <TableHeader style={{ width: 64 }}></TableHeader>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
//                         return (
//                             <TableRow key={attendee.id} >
//                                 <TableCell>
//                                     <input className="size-4 bg-black/20 rounded border-white/10 " type="checkbox" name="" id="" />
//                                 </TableCell>
//                                 <TableCell>{attendee.id}</TableCell>
//                                 <TableCell>
//                                     <div className="flex flex-col gap-1">
//                                         <span className="font-semibold text-white">{attendee.name}</span>
//                                         <span>{attendee.email}</span>
//                                     </div>
//                                 </TableCell>
//                                 <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
//                                 <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

//                                 <TableCell>
//                                     <IconButton transparente>
//                                         <MoreHorizontal className="size-4" />
//                                     </IconButton>
//                                 </TableCell>
//                             </TableRow>
//                         )
//                     })}
//                 </tbody>

//                 <tfoot>
//                     <TableRow>
//                         <TableCell colSpan={3}>
//                             Mostrando 10 de {attendees.length} itens
//                         </TableCell>

//                         <TableCell className="text-right" colSpan={3}>
//                             <div className="items-center gap-8 inline-flex">
//                                 <span>Página {page} de {totalPages}</span>

//                                 <div className="flex gap-1.5">
//                                     <IconButton onClick={goToFirstPage} disabled={page === 1}>
//                                         <ChevronsLeft className="size-4" />
//                                     </IconButton>

//                                     <IconButton onClick={goToPreviousPage} disabled={page === 1}>
//                                         <ChevronLeft className="size-4" />
//                                     </IconButton>

//                                     <IconButton onClick={gotToNextPage} disabled={page === totalPages}>
//                                         <ChevronRight className="size-4" />
//                                     </IconButton>

//                                     <IconButton onClick={goToLastPage} disabled={page === totalPages}>
//                                         <ChevronsRight className="size-4" />
//                                     </IconButton>
//                                 </div>
//                             </div>
//                         </TableCell>

//                     </TableRow>
//                 </tfoot>
//             </Table>


//         </div>
//     )
// }