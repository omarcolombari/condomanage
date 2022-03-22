import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {useContext} from "react";
import { DemandsContext} from '../../Providers/Demands';

export const DeleteButton = ({item}) => {
  const { delDemand, token } = useContext( DemandsContext );
  
  const handleDeleteDemand = () => {
    delDemand( token, item.id )
  }

  return (
    <Button onClick={handleDeleteDemand}><DeleteIcon/></Button>
  )
}