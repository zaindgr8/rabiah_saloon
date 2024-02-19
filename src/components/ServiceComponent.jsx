import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { useAuth } from "../hook/useAuth";

const ServiceComponent = () =>{

    
    const { serviceData, categoryData } = useAuth();

    return (
      <div></div>
    );
}

export {ServiceComponent};