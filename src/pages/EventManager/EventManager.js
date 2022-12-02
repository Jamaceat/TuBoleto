import {
	Box,
	Paper,
	Button,
	TableContainer,
	Table,
	TableRow,
	TableFooter,
	TablePagination,
	Divider,
	Pagination,
} from "@mui/material"
import React, {useState, ChangeEvent} from "react"
import CrudItem from "../../Components/CrudItem"

const esquemaEvento = [
	{id: 1, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 2, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 3, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 4, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 5, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 6, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 7, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 8, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{id: 9, title: "Titulo1", date: "02/12/2022", place: "Qatar", imgUrl: "link"},
	{
		id: 10,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 11,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 12,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 13,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 14,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 15,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 16,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 17,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 18,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 19,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 20,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 21,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 22,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 23,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 24,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 25,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 26,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 27,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 28,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 29,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 30,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 31,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 32,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 33,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 34,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 35,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
	{
		id: 36,
		title: "Titulo1",
		date: "02/12/2022",
		place: "Qatar",
		imgUrl: "link",
	},
]

export default function EventManager() {
	const [pages, setpages] = useState(Math.ceil(esquemaEvento.length / 5))
    const [page, setPage] = useState(1)
    const handleChange = (event, value) => {
        setPage(value - 1)
    }

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateRows: "3rem,1fr",
				width: "100%",
			}}
		>
			<Box>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#5BCF89",
						"&:hover": {backgroundColor: "#5AB865"},
						margin: "1rem",
					}}
				>
					Crear Evento
				</Button>
			</Box>
			<Pagination count={pages} onChange={handleChange} />
			<Paper elevation={5}>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 3fr 2fr 3fr 2fr 1fr",
						marginX: "1rem",
						color: "white",
						backgroundColor: "#36A3F5",
						borderRadius: "1rem",
						"&>.borde": {borderRight: "1px solid white", textAlign: "center"},
					}}
				>
					<p className="borde"> ID </p>
					<p className="borde"> Titulo </p>
					<p className="borde"> Fecha </p>
					<p className="borde"> Ubicación del evento </p>
					<p className="borde"> URL portada </p>
					<p style={{textAlign: "center"}}> Options </p>
				</Box>
				{esquemaEvento.slice(page * 5, page * 5 + 5).map((x, i, a) => (
					<>
						<CrudItem
							id={x.id}
							title={x.title}
							date={x.date}
							place={x.place}
							imgUrl={x.imgUrl}
						/>
						{i < a.length - 1 && <Divider />}
					</>
				))}
			</Paper>
		</Box>
	)
}
