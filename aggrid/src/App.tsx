import { useState } from 'react'
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ICellEditorRendererParams } from 'ag-grid-community';
import './App.css'

import { ModuleRegistry, AllCommunityModule, themeQuartz, themeAlpine } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
}

function App() {
  const [ keyword, setKeyword ] = useState('');
  const [ repodata, setRepodata ] = useState<Repository[]>([]);
  const [ columnDefs ] = useState<ColDef[]>([
    {field: 'id', filter:true}, 
    {field: 'full_name', filter:true}, 
    {field: 'html_url', filter:true},
    {
      field: 'full_name',
      cellRenderer: (params: ICellEditorRendererParams) => (
        <button
          onClick={() => alert(params.value)}
        >
          Press Me
        </button>
      )
    },
  ]);

  const handleClick = () => {
    axios.get<{ items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => setRepodata(response.data.items))
      .catch(error => console.log(error));    
  }

  return (
    <div className='App'>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      <button onClick={handleClick}>검색</button>
      <div
        style={{ height: 500, width: 850 }}
      >
        <AgGridReact 
          rowData={repodata}
          columnDefs={columnDefs}
          theme={themeAlpine}
          pagination={true}
          paginationPageSize={5}
        />
      </div>

    
    </div>
  )
}

export default App
