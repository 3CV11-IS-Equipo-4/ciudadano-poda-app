module.exports = {
    privado: {
        citizenDataView: [
            {
                label:'Nombre: ',
                type:'text',
                placeholder:'Mario',
                required: true,
                name: 'nombres',
            },
            {
                label:'Apellido Paterno: ',
                type:'text',
                placeholder:'Garcia',
                required: true,
                name: 'apellido_paterno',
            },
            {
                label:'Apellido Materno: ',
                type:'text',
                placeholder:'Juarez',
                required: true,
                name: 'apellido_materno',
            },
            {
                label:'Calle: ',
                type:'text',
                placeholder:'Laguna de San Cristobal',
                required: true,
                name: 'calle',
            },
            {
                label:'Número Exterior: ',
                type:'text',
                placeholder:'42',
                required: true,
                name: 'numero_exterior',
            },
            {
                label:'Número Interior: ',
                type:'text',
                placeholder:'54',
                required: true,
                name: 'numero_interior',
            },
            {
                label:'C. P.: ',
                type:'text',
                placeholder:'11320',
                required: true,
                name: 'codigo_postal',
            },
            {
                label:'Alcadía: ',
                type:'text',
                placeholder:'Selecciona una opción',
                required: true,
                name: 'alcaldia',
                inputType:'select',
                items: [{value:'alv', label:'Álvaro Obregón'}, {value:'azc', label:'Azcapotzalco'},{value:'ben', label:'Benito Juárez'}, {value:'coy', label:'Coyoacan'},{value:'cua', label:'Cuajimalpa'}, {value:'cuau', label:'Cuautémoc'},{value:'gam', label:'Gustavo A. Madero'}, {value:'iztc', label:'Iztacalco'},{value:'iztp', label:'Iztapalapa'}, {value:'mag', label:'Magdalena Contreras'},{value:'mig', label:'Miguel Hidalgo'}, {value:'mil', label:'Milpa Alta'},{value:'tla', label:'Tláhuac'}, {value:'tlal', label:'Tlalpan'},{value:'ven', label:'Venustiano Carranza'}, {value:'xoc', label:'Xochimilco'}],
            },
            {
                label:'Colonia: ',
                type:'text',
                placeholder:'Selecciona una opción: ',
                required: true,
                name: 'colonia',
            },
            {
                label:'Teléfono: ',
                type:'text',
                placeholder:'0000000000',
                required: true,
                name: 'numero_telefono',
            },
            {
                label:'Correo electrónico: ',
                type:'text',
                placeholder:'correoele@domino.com',
                required: true,
                name: 'email',
            },
            {
                label:'Documento de identificación',
                type:'text',
                placeholder:'INE',
                required: false,
                inputType: 'photos',
                name: 'documento_identificacion_oficial',
            },
        ],
        privatDataView: [
            {
                label:'Tipo de solicitud: ',
                type:'text',
                placeholder:'Selecciona una opción',
                required: true,
                name: 'solicitud',
                inputType:'select',
                items: [{value:'Topiara', label:'Poda o derribo por ornamentación'}, {value:'Construcción', label:'Poda o derribo por construcción, remodelación o amplación'},{value:'Riesgo', label:'Derribo por riesgo '}],
            },
            {
                label:'Comprobante de propiedad',
                type:'',
                placeholder:'comprobante de propiedad',
                required: true,
                name: 'comprobante_propiedad',
            },
            {
                label:'Comprobante de domicilio',
                type:'',
                placeholder:'comprobante de domicilio',
                required: true,
                name: 'comprobante_domicilio',
            },
        ],
        riesgoDataView: [
            {
                label:'Dictamen técnico',
                type:'',
                placeholder:'Docuemento pdf',
                required: false,
                inputType: 'photos',
                name: 'documento_dictamen_riesgo',
            },
        ],
        constructionDataView: [
            {
                label:'Registro de Manifestación de Construcción de Tipo A, B o C o Licencia de Construcción Especial con sello de la Alcaldía.',
                type:'',
                placeholder:'Docuemento pdf',
                required: true,
                name: 'documento_registro',
            },
            {
                label:'Declaratoria ambiental',
                type:'',
                placeholder:'Documento pdf',
                required: true,
                name: 'documento_declaratoria',
            },
            {
                label:'Planos arquitectonicos',
                type:'',
                placeholder:'Documento pdf',
                required: true,
                name: 'documento_planos',
            },
        ],
        treeDataView: [{
            label:'Sobre calle: ',
            type:'text',
            placeholder:'Mar mediterraneo',
            required: true,
            name: 'calle_arbol',
        },
        {
            label:' calle',
            type:'text',
            placeholder:'Mar rojo',
            required: true,
            name: 'calle_adyacente_1',
        },
        {
            label:'Y calle',
            type:'text',
            placeholder:'Mar rojo',
            required: true,
            name: 'calle_adyacente_2',
        },
        {
            label:'C. P.: ',
            type:'text',
            placeholder:'11320',
            required: true,
            name: 'cp',
        },
        {
            label:'Alcadía: ',
            type:'text',
            placeholder:'Selecciona una opción',
            required: true,
            name: 'alcaldia_arbol',
            inputType:'select',
            items: [{value:'alv', label:'Álvaro Obregón'}, {value:'azc', label:'Azcapotzalco'},{value:'ben', label:'Benito Juárez'}, {value:'coy', label:'Coyoacan'},{value:'cua', label:'Cuajimalpa'}, {value:'cuau', label:'Cuautémoc'},{value:'gam', label:'Gustavo A. Madero'}, {value:'iztc', label:'Iztacalco'},{value:'iztp', label:'Iztapalapa'}, {value:'mag', label:'Magdalena Contreras'},{value:'mig', label:'Miguel Hidalgo'}, {value:'mil', label:'Milpa Alta'},{value:'tla', label:'Tláhuac'}, {value:'tlal', label:'Tlalpan'},{value:'ven', label:'Venustiano Carranza'}, {value:'xoc', label:'Xochimilco'}],
        },
        {
            label:'Colonia: ',
            type:'text',
            placeholder:'Selecciona una opción: ',
            required: true,
            name: 'colonia_arbol',
        }, 
        {
            label:'Referencias: ',
            type:'textArea',
            placeholder:'',
            required: true,
            name: 'referencias',
        },
        {
            label:'Motivo: ',
            type:'textArea',
            placeholder:'',
            required: true,
            name: 'motivos',
        },
        {
            label:'Fotografias del árbol',
            type:'',
            placeholder:'Fotografias',
            required: false,
            inputType: 'photos',
            name: 'fotos',
        },
        {
            label:'Tipo de servicio: ',
            type:'text',
            placeholder:'Selecciona una opción: ',
            required: false,
            inputType: 'select',
            name: 'tipo_servicio',
            items: [{value:'Poda', label:'Poda'}, {value:'Derribo', label:'Derribo'}],
        }    
    ],
    },
    publica: {
        citizenDataView: [
            {
                label:'Nombre: ',
                type:'text',
                placeholder:'Mario',
                required: true,
                name: 'nombres',
            },
            {
                label:'Apellido Paterno: ',
                type:'text',
                placeholder:'Garcia',
                required: true,
                name: 'apellido_paterno',
            },
            {
                label:'Apellido Materno: ',
                type:'text',
                placeholder:'Juarez',
                required: true,
                name: 'apellido_materno',
            },
            {
                label:'Calle: ',
                type:'text',
                placeholder:'Laguna de San Cristobal',
                required: true,
                name: 'calle',
            },
            {
                label:'Número Exterior: ',
                type:'text',
                placeholder:'42',
                required: true,
                name: 'numero_exterior',
            },
            {
                label:'Número Interior: ',
                type:'text',
                placeholder:'54',
                required: true,
                name: 'numero_interior',
            },
            {
                label:'C. P.: ',
                type:'text',
                placeholder:'11320',
                required: true,
                name: 'codigo_postal',
            },
            {
                label:'Alcadía: ',
                type:'text',
                placeholder:'Selecciona una opción',
                required: true,
                name: 'alcaldia',
                inputType:'select',
                items: [{value:'alv', label:'Álvaro Obregón'}, {value:'azc', label:'Azcapotzalco'},{value:'ben', label:'Benito Juárez'}, {value:'coy', label:'Coyoacan'},{value:'cua', label:'Cuajimalpa'}, {value:'cuau', label:'Cuautémoc'},{value:'gam', label:'Gustavo A. Madero'}, {value:'iztc', label:'Iztacalco'},{value:'iztp', label:'Iztapalapa'}, {value:'mag', label:'Magdalena Contreras'},{value:'mig', label:'Miguel Hidalgo'}, {value:'mil', label:'Milpa Alta'},{value:'tla', label:'Tláhuac'}, {value:'tlal', label:'Tlalpan'},{value:'ven', label:'Venustiano Carranza'}, {value:'xoc', label:'Xochimilco'}],
            },
            {
                label:'Colonia: ',
                type:'text',
                placeholder:'Selecciona una opción: ',
                required: true,
                name: 'colonia',
            },
            {
                label:'Teléfono: ',
                type:'text',
                placeholder:'0000000000',
                required: true,
                name: 'numero_telefono',
            },
            {
                label:'Correo electrónico: ',
                type:'text',
                placeholder:'correoele@domino.com',
                required: true,
                name: 'email',
            },
            {
                label:'Documento de identificación',
                type:'text',
                placeholder:'INE',
                required: false,
                inputType: 'photos',
                name: 'documento_identificacion_oficial',
            },
        ],
        treeDataView: [{
            label:'Sobre calle: ',
            type:'text',
            placeholder:'Mar mediterraneo',
            required: true,
            name: 'calle_arbol',
        },
        {
            label:' calle',
            type:'text',
            placeholder:'Mar rojo',
            required: true,
            name: 'calle_adyacente_1',
        },
        {
            label:'Y calle',
            type:'text',
            placeholder:'Mar rojo',
            required: true,
            name: 'calle_adyacente_2',
        },
        {
            label:'C. P.: ',
            type:'text',
            placeholder:'11320',
            required: true,
            name: 'cp',
        },
        {
            label:'Alcadía: ',
            type:'text',
            placeholder:'Selecciona una opción',
            required: true,
            name: 'alcaldia_arbol',
            inputType:'select',
            items: [{value:'alv', label:'Álvaro Obregón'}, {value:'azc', label:'Azcapotzalco'},{value:'ben', label:'Benito Juárez'}, {value:'coy', label:'Coyoacan'},{value:'cua', label:'Cuajimalpa'}, {value:'cuau', label:'Cuautémoc'},{value:'gam', label:'Gustavo A. Madero'}, {value:'iztc', label:'Iztacalco'},{value:'iztp', label:'Iztapalapa'}, {value:'mag', label:'Magdalena Contreras'},{value:'mig', label:'Miguel Hidalgo'}, {value:'mil', label:'Milpa Alta'},{value:'tla', label:'Tláhuac'}, {value:'tlal', label:'Tlalpan'},{value:'ven', label:'Venustiano Carranza'}, {value:'xoc', label:'Xochimilco'}],
        },
        {
            label:'Colonia: ',
            type:'text',
            placeholder:'Selecciona una opción: ',
            required: true,
            name: 'colonia_arbol',
        }, 
        {
            label:'Referencias: ',
            type:'textArea',
            placeholder:'',
            required: true,
            name: 'referencias',
        },
        {
            label:'Motivo: ',
            type:'textArea',
            placeholder:'',
            required: true,
            name: 'motivos',
        },
        {
            label:'Fotografias del árbol',
            type:'',
            placeholder:'Fotografias',
            required: false,
            inputType: 'photos',
            name: 'fotos',
        },{
            label:'Tipo de servicio: ',
            type:'text',
            placeholder:'Selecciona una opción: ',
            required: false,
            inputType: 'select',
            name: 'tipo_servicio',
            items: [{value:'Poda', label:'Poda '}, {value:'Derribo', label:'Derribo'}],
        }],
        
    },
    logins:{
        loginEMView: [{
            label:'Email: ',
            type:'email',
            placeholder:'correoele@domino.com',
            required: true,
            name: 'email',
        },
        {
            label:'Contraseña: ',
            type:'password',
            placeholder:'',
            required: true,
            name: 'password',
        },],
        loginCIView: [{
            label:'Email: ',
            type:'email',
            placeholder:'correoele@domino.com',
            required: true,
            name: 'city',
        },
        {
            label:'Contraseña: ',
            type:'password',
            placeholder:'',
            required: true,
            name: 'password',
        }],
    },
    tables: {
        estadoSolicitud: [
            {
              Header: 'Folio de la solicitud',
              accessor: '_id', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'tipo',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
          ],
        oficialiaPartes: [
            {
              Header: 'Folio de la solicitud',
              accessor: '_id', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'tipo',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia',
            },
            {
                Header: 'C.P.',
                accessor: 'codigo_postal',
            },
        ],
        ejemploOficialia: [
            {
                '_id': 'jdjdjdjdjjdjd',
                tipo: ' Vía publico',
                'tipo_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320'
            }
        ],
        jefeArea: [
            {
              Header: 'Folio de la solicitud',
              accessor: '_id', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'tipo',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia',
            },
            {
                Header: 'C.P.',
                accessor: 'codigo_postal',
            },
            {
                Header: 'Consultar',
                accessor: 'consulta',
            },
        ],
        ejemploJA: [
            {
                '_id': 'jdjdjdjdjjdjd',
                tipo: ' Vía publico',
                'tipo_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320',
                consulta: '<Aquí iria un boton>'
            }
        ],
        dictaminador: [
            {
              Header: 'Folio de la solicitud',
              accessor: '_id', // accessor is the "key" in the data
            },
            {
              Header: 'Tipo de trámite',
              accessor: 'tipo',
            },
            {
                Header: 'Tipo de solicitud',
                accessor: 'tipo_servicio',
            },
            {
                Header: 'Estado de la solicitud',
                accessor: 'estado',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia',
            },
            {
                Header: 'C.P.',
                accessor: 'codigo_postal',
            },
            {
                Header: 'Consultar',
                accessor: 'consulta',
            },
        ],
        ejemploDI: [
            {
                '_id': 'jdjdjdjdjjdjd',
                tipo: ' Vía publico',
                'tipo_servicio': 'Poda',
                estado: 'Recibida',
                colonia: 'colonia',
                codigo_postal: '11320',
                consulta: '<Aquí iria un boton>'
            }
        ],
        Admin: [
            {
              Header: 'Rol',
              accessor: 'rol', // accessor is the "key" in the data
            },
            {
              Header: 'Nombre',
              accessor: 'nombres',
            },
            {
                Header: 'Apellido Paterno',
                accessor: 'apellido_paterno',
            },
            {
                Header: 'Apellido Materno',
                accessor: 'apellido_materno',
            },
            {
                Header: 'Alcaldía',
                accessor: 'alcaldia',
            },
            {
                Header: 'Correo eléctronico',
                accessor: 'email',
            },
            {
                Header: 'Admin',
                accessor: 'permiso_administrador',
            },
            
        ],
        ejemploAdmin: [
            {
                'rol': 'JA',
                nombres: 'Gumercindo',
                apellido_paterno: 'Perez',
                apellido_materno: 'Juarez',
                alcaldia: 'Alcaldia',
                email: 'correo@dominio.com',
                permiso_administrador: 'Nel'
            }
        ],
        mockData: [{    
            estado:'Enviada',
            '_id':'sj34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'si34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sh34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sg34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sf34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'se34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sd34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sc34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sb34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        },
        {
            estado:'Enviada',
            '_id':'sa34344cdfg43nh4bdcs23243',
            'tipo_servicio':'Derribo',
            tipo:'Vía pública'
        }],
        
    },
};