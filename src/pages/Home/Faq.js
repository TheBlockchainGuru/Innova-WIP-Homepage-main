import * as React from 'react';
import {
    Box, 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '../../constants/content';

export default function Faq() {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack alignItems="center" gap={6}>
            <Stack gap={1}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(110.83deg, #CD3FFF 12.82%, #0085FF 120.34%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent'
                    }}
                >Faqs</Typography>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        lineHeight: '64px'
                    }}
                >Looking for Answers?</Typography>
            </Stack>
            <Stack gap={3} sx={{ maxWidth: 740 }}>
            {faqs.map((item, key) => 
                <Accordion key={key}
                    sx={{
                        border: '4px solid #5f596d',
                        background: 'linear-gradient(116.41deg, rgba(103, 103, 103, 0.5) -56.52%, rgba(45, 37, 58, 0.5) 130.2%)',
                        borderRadius: '14px !important',
                        px: 4.5,
                        py: 2,
                        '&::before': {
                            display: 'none'
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" color="text.secondary" sx={{ textTransform: 'capitalize' }}>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            )}
            </Stack>
        </Stack>
    )
}