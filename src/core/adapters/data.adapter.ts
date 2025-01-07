import { Data, EndpointData } from "../models";

export const dataAdapter = (data: EndpointData) => {
  const formattedData: Data = {
    nombreComercial: data.NombreComercial,
    nombreLegal: data.NombreLegal,
    ceo: data.CEO,
    fechaCreacion: data.FechaCreacion,
    ingresoAnual: data.IngresoAnual,
    cantidadEmpleados: data.CantidadEmpleados,
    pais: data.Pais,
    principalProducto: data.PrincipalProducto,
  };

  return formattedData;
};
