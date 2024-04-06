import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { ChangeEvent, useState } from 'react';
import { attendees } from '../app/mock/attendees';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

export function AttendeeList() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10);

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center justify-center gap-3">
          <MagnifyingGlassIcon className='w-6 h-6 text-emerald-300'/>
          <input
            onChange={onSearchInputChange}
            type="search"
            name="search-input"
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"/>
        </div>
      </div>

      <Table>
        <thead>
          <tr className='border-b border-white/10'>
            <TableHeader style={{width: 48}}>
              <input type="checkbox" name="" id="" className='size-4  bg-black/20 rounded border-white/10 ' />
            </TableHeader>
            <TableHeader>
              Código
            </TableHeader>
            <TableHeader >
              Participantes
            </TableHeader>
            <TableHeader >
              Dara de inscrição
            </TableHeader>
            <TableHeader >
              Data do check-in
            </TableHeader>
            <TableHeader style={{width: 64}} ></TableHeader>
          </tr>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <tr className='border-b border-white/10 hover:bg-white/5 transition-all' key={attendee.id}>

              <TableCell>
                <input type="checkbox" name="" id="" className='size-4  bg-black/20 rounded border-white/10 ' />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>{attendee.name}</span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>
                {dayjs().to(attendee.createdAt)}
              </TableCell>
              <TableCell>
                {dayjs().to(attendee.checkedInAt)}
              </TableCell>
              <TableCell>
                <IconButton className='bg-transparent'>
                  <DotsHorizontalIcon className='size-4'/>
                </IconButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de {attendees.length} itens</TableCell>
            <TableCell colSpan={3}>
              <div className='inline-flex w-full justify-end items-center gap-8'>
                <span>
                    Página {page} de {totalPages}
                </span>

                <div className='flex gap-1.5'>
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <DoubleArrowLeftIcon className='size-4'/>
                  </IconButton>

                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeftIcon className='size-4'/>
                  </IconButton>


                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRightIcon className='size-4'/>
                  </IconButton>


                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                    <DoubleArrowRightIcon className='size-4'/>
                  </IconButton>

                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}