import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function MenuCategorias({handleCloseNavMenu}) {

  // <NavDropdown className='Menu' title="Categoria" >
  //   <NavDropdown.Item><Link className='Links1' to='/Tienda/Categoria' onClick={handleCloseNavMenu}>Categoria</Link></NavDropdown.Item>
  // </NavDropdown>

  return (
    <NavDropdown className='MenuCategorias' >

        <NavDropdown className='Menu' title="Categoria C" >
          <NavDropdown className='Menu' title="Cristal de Roca" >
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 4mm' onClick={handleCloseNavMenu}>Cristal de Roca 4 mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca 6mm' onClick={handleCloseNavMenu}>Cristal de Roca 6 mm</Link></NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>

        <NavDropdown className='Menu' title="Categoria D" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Dijes De Piedra' onClick={handleCloseNavMenu}>Dijes De Piedra</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className='Menu' title="Categoria E" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Encerado Grande' onClick={handleCloseNavMenu}>Hilo Encerado Grande</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className='Menu' title="Categoria F" >
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fimo' onClick={handleCloseNavMenu}>Fimo</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Fornituras' onClick={handleCloseNavMenu}>Fornituras</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className='Menu' title="Categoria M" >
          <NavDropdown className='Menu' title="Madera" >
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 5mm' onClick={handleCloseNavMenu}>Madera 5mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 8mm' onClick={handleCloseNavMenu}>Madera 8mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 10mm' onClick={handleCloseNavMenu}>Madera 10mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 12mm' onClick={handleCloseNavMenu}>Madera 12mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 14mm' onClick={handleCloseNavMenu}>Madera 14mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 16mm' onClick={handleCloseNavMenu}>Madera 16mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 18mm' onClick={handleCloseNavMenu}>Madera 18mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera 20mm' onClick={handleCloseNavMenu}>Madera 20mm</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Item><Link className='Links1' to='/Tienda/Mostacilla' onClick={handleCloseNavMenu}>Mostacilla</Link></NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className='Menu' title="Categoria T" >
          <NavDropdown className='Menu' title="Tira de Piedra" >
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Tira de Piedra 4mm' onClick={handleCloseNavMenu}>Tira de Piedra 4mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Tira de Piedra 6mm' onClick={handleCloseNavMenu}>Tira de Piedra 6mm</Link></NavDropdown.Item>
            <NavDropdown.Item><Link className='Links1' to='/Tienda/Tira de Piedra 8mm' onClick={handleCloseNavMenu}>Tira de Piedra 8mm</Link></NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        
      </NavDropdown>
  );
}

export default MenuCategorias;