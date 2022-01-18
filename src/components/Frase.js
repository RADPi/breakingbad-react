import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
	padding: 2rem;
	border-radius: 0.5rem;
	background-color: #fff;
	max-width: 800px;
	@media (min-width: 768px) {
		margin-top: 10rem;
	}

	h1 {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		position: relative;
		padding-left: 3rem;
		font-size: 1.8rem;
		&::before {
			content: open-quote;
			font-size: 8rem;
			color: black;
			position: absolute;
			left: -1rem;
			top: -2rem;
		}
	}

	p {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.2rem;
		font-weight: bold;
		text-align: right;
		color: #666;
		margin-top: 2rem;
	}
`

export default function Frase({ frase }) {
	return (
		<ContenedorFrase>
			<h1>{frase.quote}</h1>
			<p>-{frase.author}</p>
		</ContenedorFrase>
	)
}
