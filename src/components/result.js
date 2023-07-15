import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Result() {

    const initialvalues = {
        rollno: 0,
        name: "",
        sub1: 0,
        sub2: 0,
        sub3: 0,
        sub4: 0,
        sub5: 0,
        total: 0,
        per: 0
    }

    const [data, setdata] = useState(initialvalues);
    const [mydata, myalldata] = useState([]);
    const [edit, editdata] = useState([]);
    const [isedit, issetedit] = useState(false);
    const [editid, seteditid] = useState();
    const [search, setsearch] = useState('');

    const btnhandler = (e) => {
        e.preventDefault();
        data.total = parseInt(data.sub1) + parseInt(data.sub2) + parseInt(data.sub3) + parseInt(data.sub4) + parseInt(data.sub5);
        data.per = data.total / 5;
        console.log(data)

       if(isedit)
       {
            let edata = [...mydata]
            edata[editid] = data;
            myalldata(edata)
            issetedit(false)

       }
       else{
            myalldata(mydata => [...mydata,data]);
       }

       e.target.rollno.value = '';
       e.target.name.value = '';
       e.target.sub1.value = '';
       e.target.sub2.value = '';
       e.target.sub3.value = '';
       e.target.sub4.value = '';
       e.target.sub5.value = '';

    }

    const delethandler = (k) => {
        const newPeople = mydata.filter((t, i) => i !== k);
        myalldata(newPeople);
    }

    const edithandler = (k) => {
        seteditid(k);
        issetedit(true)
        const newPeople = mydata[k];
        setdata(newPeople);
    }

       useEffect(()=>{
        console.log(mydata);
        console.log(edit);
       },[mydata,edit])

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg"  sticky='top'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={(e)=>setsearch(e.target.value)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col lg={8} sm={9}>

                        <Form className='border border-dark rounded p-5' onSubmit={btnhandler}>
                            <h3 className='text-center'>Student result</h3>
                            <Form.Label>Roll number</Form.Label>
                            <Form.Control type="number" placeholder="Enter rollno" className='mb-3' name='rollno' value={isedit ? data.rollno : undefined} onChange={handleChange} />

                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" className='mb-3' name='name' value={isedit ? data.name : undefined} onChange={handleChange} />

                            <Form.Label>Subject 1</Form.Label>
                            <Form.Control type="number" placeholder="Enter marks" className='mb-3' name='sub1' value={isedit ? data.sub1 : undefined} onChange={handleChange} />

                            <Form.Label>Subject 2</Form.Label>
                            <Form.Control type="number" placeholder="Enter marks" className='mb-3' name='sub2' value={isedit ? data.sub2 : undefined} onChange={handleChange} />

                            <Form.Label>Subject 3</Form.Label>
                            <Form.Control type="number" placeholder="Enter marks" className='mb-3' name='sub3' value={isedit ? data.sub3 : undefined} onChange={handleChange} />

                            <Form.Label>Subject 4</Form.Label>
                            <Form.Control type="number" placeholder="Enter marks" className='mb-3' name='sub4' value={isedit ? data.sub4 : undefined} onChange={handleChange} />

                            <Form.Label>Subject 5</Form.Label>
                            <Form.Control type="number" placeholder="Enter marks" className='mb-3' name='sub5' value={isedit ? data.sub5 : undefined} onChange={handleChange} />

                            <Button className='d-flex m-auto' type='submit'>Submit</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className='mt-5'>
                    <Col>
                        <Table variant='success' className='border border-dark text-center' bordered striped='columns'>
                            <thead>
                                <tr>
                                    <th>Roll nu</th>
                                    <th>Name</th>
                                    <th>Sub1</th>
                                    <th>sub2</th>
                                    <th>sub3</th>
                                    <th>sub4</th>
                                    <th>sub5</th>
                                    <th>Total</th>
                                    <th>Per</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    mydata.filter((el) => {
                                        if(search) {
                                            return el.name.includes(search)
                                        } else {
                                            return el
                                        }
                                    }).map((item, k) => {
                                        return (
                                            <tr>
                                                <td>{item.rollno}</td>
                                                <td>{item.name}</td>
                                                <td>{item.sub1}</td>
                                                <td>{item.sub2}</td>
                                                <td>{item.sub3}</td>
                                                <td>{item.sub4}</td>
                                                <td>{item.sub5}</td>
                                                <td>{item.total}</td>
                                                <td>{item.per}</td>
                                                <td><button onClick={() => { delethandler(k) }} className=' btn btn-primary'>Delete</button></td>
                                                <td><button onClick={() => { edithandler(k) }} className='btn btn-primary'>Edit</button></td>
                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Result
