"use client";

import ButtonFilter from "@/core/components/common/button_filter";
import { Data } from "@/core/models";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "nombreComercial",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Nombre comercial"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap font-medium">
          {row.getValue("nombreComercial")}
        </div>
      );
    },
  },
  {
    accessorKey: "nombreLegal",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Nombre Legal"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap font-medium">
          {row.getValue("nombreLegal")}
        </div>
      );
    },
  },
  {
    accessorKey: "ceo",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="CEO"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap font-medium">
          {row.getValue("ceo")}
        </div>
      );
    },
  },
  {
    accessorKey: "fechaCreacion",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Fecha creacion"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap font-medium">
          {row.getValue("fechaCreacion")}
        </div>
      );
    },
  },
  {
    accessorKey: "ingresoAnual",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ingreso anual"
        />
      );
    },
    cell: ({ row }) => {
      const ingreso = parseFloat(row.getValue("ingresoAnual"));
      const formatted = new Intl.NumberFormat("en-US", {}).format(ingreso);

      return (
        <div className="text-right  text-wrap font-medium">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "cantidadEmpleados",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Cantidad Empleados"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap font-medium">
          {row.getValue("cantidadEmpleados")}
        </div>
      );
    },
  },
  {
    accessorKey: "pais",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Pais"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left  text-wrap  font-medium">
          {row.getValue("pais")}
        </div>
      );
    },
  },
  {
    accessorKey: "principalProducto",
    header: ({ column }) => {
      return (
        <ButtonFilter
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Principal producto"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left text-wrap font-medium">
          {row.getValue("principalProducto")}
        </div>
      );
    },
  },
];
