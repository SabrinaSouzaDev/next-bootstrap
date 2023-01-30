import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 160,
    },
  },
};

interface Comarca{
  id:number;
  nome:string;
  descricao:string;
}

interface Regional {
  id:number;
  nome:string;
  descricao:String;
  comarcas: Comarca[];
}


let regional: Regional[] = [
  {
    id: 1,
    nome: "GUAJARÁ",
    descricao: "Região Metropolitana",
    comarcas: [
      {
        "id": 1,
        "nome": "BELÉM",
        "descricao": "Belém do Pará"
      },
      {
        "id": 1,
        "nome": "BENGUÍ",
        "descricao": "Belém do Pará"
      }
    ]
  },
  {
    "id": 1,
    "nome": "TESTE 2",
    "descricao": "Região Metropolitana",
    "comarcas": [
      {
        "id": 1,
        "nome": "TESTE 2.1",
        "descricao": "Belém do Pará"
      },
      {
        "id": 1,
        "nome": "TESTE 2.3",
        "descricao": "Belém do Pará"
      }
    ]
  },
  {
    "id": 1,
    "nome": "TESTE 3",
    "descricao": "Região Metropolitana",
    "comarcas": [
      {
        "id": 1,
        "nome": "Teste3.1",
        "descricao": "Belém do Pará"
      },
      {
        "id": 1,
        "nome": "TESTE 3.2",
        "descricao": "Belém do Pará"
      }
    ]
  }
]


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 220, mt: 3 }}>
        <Select
          // multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Região</em>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Região</em>
          </MenuItem>
          {regional.map((regional) => (
            <MenuItem
              key={regional.id}
              value={regional.nome}
              style={getStyles(regional.nome, personName, theme)}
            >
              {regional.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}