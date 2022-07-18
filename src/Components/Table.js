import React from 'react'
import {AppBar, Box,Toolbar,Typography,Stack,Button, InputBase} from '@mui/material'
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {
    const columns = [
        { field: 'id', headerName: 'S.No', width: 60},
        { field: 'regdate', headerName: 'Reg.Date', width: 100,},
        { field: 'patientname', headerName: 'Patient Name', width: 130 },
        { field: 'age',headerName: 'Age',type: 'number',width: 70},
        { field: 'totalsessions',type:'number',headerName: 'Total Sessions',width: 90},
        { field: 'lastaptdate',headerName: 'Last Apt Date',width: 130},
        { field: 'doctor',headerName: 'Assigned Doctor',width: 160},
        { field: 'status',headerName: 'Status',width: 160,},
        { field: 'report',headerName: 'Report',width: 160},
        
      ];
      
      const rows = [
        { id: 1, regdate: '22 Feb 22', patientname: 'Devon lane', age: 45,totalsessions:'10',lastaptdate:'22 Feb 22',doctor:'Jacob jones',status:'Discharged',report:'view'},
        { id: 2, regdate: '13 Sep 22', patientname: 'Cersei', age: 42,totalsessions:'05',lastaptdate:'21 sep 22',doctor:'Arun',status:'Ongoing',report:'view'},
        { id: 3, regdate: '03 Dec 22', patientname: 'Jaime', age: 45,totalsessions:'06',lastaptdate:'12 nov 22',doctor:'Ajith ',status:'ongoing',report:'view'},
        { id: 4, regdate: '18 Jan 22', patientname: 'Arya', age: 16,totalsessions:'30',lastaptdate:'13 Feb 22',doctor:'Prince',status:'Discharged',report:'view' },
        { id: 5, regdate: '20 Jun 22', patientname: 'Daenerys', age: 19,totalsessions:'20',lastaptdate:'02 jun 22',doctor:'Diwin',status:'Disconnected',report:'view' },
        { id: 6, regdate: '17 Apr 22', patientname: 'Sanjay', age: 150,totalsessions:'13',lastaptdate:'22 dec 22',doctor:'Karthick',status:'Discharged',report:'view' },
        { id: 7, regdate: '01 Jan 22', patientname: 'Ferrara', age: 44,totalsessions:'34',lastaptdate:'19 apr 22',doctor:'Kannan',status:'Ongoing',report:'view' },
        { id: 8, regdate: '31 Oct 22', patientname: 'Rossini', age: 36,totalsessions:'24',lastaptdate:'06 jan 22',doctor:'Dhina',status:'Discharged',report:'view' },
        { id: 9, regdate: '16 Nov 22', patientname: 'Harvey', age: 65,totalsessions:'23',lastaptdate:'29 mar 22',doctor:'Joseph',status:'Discontinued',report:'view' },
        { id: 10, regdate: '25 Feb 22', patientname: 'Keshav', age: 45,totalsessions:'11',lastaptdate:'22 Feb 22',doctor:'Jacob jones',status:'Discharged',report:'view'},
        { id: 11, regdate: '23 Sep 22', patientname: 'CPoorni', age: 42,totalsessions:'25',lastaptdate:'21 sep 22',doctor:'Arun',status:'Ongoing',report:'view'},
        { id: 12, regdate: '03 Dec 22', patientname: 'Morrthy', age: 45,totalsessions:'66',lastaptdate:'12 nov 22',doctor:'Ajith ',status:'ongoing',report:'view'},
        { id: 13, regdate: '18 Jan 22', patientname: 'Ayyasamy', age: 16,totalsessions:'10',lastaptdate:'13 Feb 22',doctor:'Prince',status:'Discharged',report:'view' },
        { id: 14, regdate: '22 Jun 22', patientname: 'Ganapathy', age: 19,totalsessions:'80',lastaptdate:'02 jun 22',doctor:'Diwin',status:'Disconnected',report:'view' },
        { id: 15, regdate: '14 Apr 22', patientname: 'Nimal', age: 150,totalsessions:'16',lastaptdate:'22 dec 22',doctor:'Karthick',status:'Discharged',report:'view' },
        { id: 16, regdate: '01 Jan 22', patientname: 'samy', age: 44,totalsessions:'40',lastaptdate:'19 apr 22',doctor:'Kannan',status:'Ongoing',report:'view' },
        { id: 17, regdate: '31 Oct 22', patientname: 'Arumugan', age: 36,totalsessions:'14',lastaptdate:'06 jan 22',doctor:'Dhina',status:'Discharged',report:'view' },
        { id: 18, regdate: '10 Nov 22', patientname: 'Prabhu', age: 91,totalsessions:'10',lastaptdate:'29 mar 22',doctor:'Joseph',status:'Discontinued',report:'view' },
        { id: 19, regdate: '09 Jul 22', patientname: 'Pugal', age: 64,totalsessions:'23',lastaptdate:'19 feb 22',doctor:'Antony',status:'Ongoing',report:'view' },
        { id: 20, regdate: '02 Dec 22', patientname: 'Nandhu', age: 33,totalsessions:'03',lastaptdate:'20 mar 22',doctor:'Joseph',status:'Discontinued',report:'view' },
      ];
    const Search = styled("div")(({theme})=>({
        backgroundColor:'white',
        border:'1px solid black',
        borderRadius:'5px'
    }));
  return (
    <Box flex={1}>
        <AppBar position='static' sx={{backgroundColor:'white',marginTop:1}}>
            <Toolbar>
            <Stack direction='row' spacing={2} flex={1} justifyContent="space-between">
                <Typography color='blue' variant='h6'>
                 Reports
                 </Typography>
                 <Button sx={{color:'blue'}} size='small' variant='outlined'>
                <SearchIcon/>
                <InputBase placeholder='search..'>
                </InputBase>
                </Button>
                <Button sx={{color:'blue',m:'1'}} size='small' variant='outlined'>
                <CalendarMonthIcon/>
                Select Date</Button>
                <Button sx={{color:'blue',m:'1'}} size='small' variant='outlined'>
                <FilterAltOutlinedIcon/>
                Filter</Button>
                <Button sx={{color:'blue',m:'1'}} size='small' variant='outlined'>
                <FileUploadOutlinedIcon/>
                Export</Button>
            </Stack>     
                 </Toolbar>    
         </AppBar> 
         <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[2]}
      />
    </div>  
    </Box>    
    )
}

export default Table