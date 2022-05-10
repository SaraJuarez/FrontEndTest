import { fireEvent, render, screen, MemoryRouter, getByText } from "@testing-library/react";
import Theme from '../../../Theme';
import Nav from "./Nav";
import {createMemoryHistory} from 'history';
import { MemoryRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';

test('If heading is present', async()=> {
    render(<Nav />, {wrapper: Router})

    // verify page content for expected route
    expect(screen.getByText(/Mobile Catalog/i)).toBeInTheDocument();
})