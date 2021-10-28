import styled from "styled-components";
import { useParams } from "react-router";

const PlugSpot = (props) => {
	const { id } = useParams()
	return(
		<div>
      <h3>Тут Плаг Спот ID: {id}</h3>
    </div>
	);
}

export default PlugSpot