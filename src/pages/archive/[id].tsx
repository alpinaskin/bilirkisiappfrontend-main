import { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import { useRouter } from "next/router";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// ** Service Imports
import MaddiTazminatService from "src/services/MaddiTazminatService";

const Archive = () => {
    const router = useRouter();
    const { id } = router.query;
    const [maddiTazminat, setMaddiTazminat] = useState("");
    useEffect(() => {
        if(!router.isReady) return;

        MaddiTazminatService.getMaddiTazminatById(id).then(response => {
            console.log(response.data) 
            setMaddiTazminat(response.data)
        });
    }, [router.isReady])

  

    return <>
            <Card>
                <CardContent>
                    <Typography variant='h3' sx={{ marginBottom: 3, color: 'common.white' }}>
                    {Object.keys(maddiTazminat).map((e,i) =>{<h2 key={i}> {e}</h2>})}
                    </Typography>
                </CardContent>
            </Card>
            </>;
};

export default Archive;
