import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: 'Pizza API',
            version: '1.0.0',
            description: 'API for managing pizzas, users, orders, and customers.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                Pizza: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3a7'
                        },
                        size: {
                            type: 'string',
                            enum: ['medium', 'large', 'family', 'extraordinary'],
                            default: 'medium',
                            example: 'large'
                        },
                        flavours: {
                            type: 'array',
                            items: {
                                type: 'string'
                            },
                            example: ['pepperoni', 'mushroom']
                        }
                    },
                    required: ['size', 'flavours']
                },
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3a8'
                        },
                        name: {
                            type: 'string',
                            example: 'John Smith'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'john@example.com'
                        },
                        password: {
                            type: 'string',
                            format: 'password',
                            example: 'secret123'
                        },
                        active: {
                            type: 'boolean',
                            example: true
                        }
                    },
                    required: ['name', 'email', 'password', 'active']
                },
                Order: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3a9'
                        },
                        customer_id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3b0'
                        },
                        pizza_id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3a7'
                        },
                        status: {
                            type: 'string',
                            enum: ['pending', 'confirmed', 'cancelled', 'completed'],
                            default: 'pending',
                            example: 'confirmed'
                        },
                        delivery_status: {
                            type: 'string',
                            enum: ['not_started', 'in_progress', 'delivered'],
                            default: 'not_started',
                            example: 'in_progress'
                        }
                    },
                    required: ['customer_id', 'pizza_id', 'status', 'delivery_status']
                },
                Customer: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            format: 'objectId',
                            example: '60f7c0d6f1b4c823d8f0e3b0'
                        },
                        national_id: {
                            type: 'string',
                            example: '12345678900'
                        },
                        name: {
                            type: 'string',
                            example: 'Maria Oliveira'
                        },
                        phone: {
                            type: 'string',
                            example: '+5511999999999'
                        }
                    },
                    required: ['national_id', 'name', 'phone']
                },
                LoginRequest: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'user@example.com'
                        },
                        password: {
                            type: 'string',
                            format: 'password',
                            example: 'password123'
                        }
                    },
                    required: ['email', 'password']
                },
                LoginResponse: {
                    type: 'object',
                    properties: {
                        token: {
                            type: 'string',
                            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                        }
                    }
                }
            }
        },
        security: [{ bearerAuth: [] }],
        paths: {
            '/pizzas': {
                get: {
                    summary: 'Get all pizzas',
                    tags: ['Pizza'],
                    responses: {
                        '200': {
                            description: 'List of pizzas',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Pizza'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                post: {
                    summary: 'Create a new pizza',
                    tags: ['Pizza'],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Pizza'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'Pizza created successfully',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Pizza'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                }
            },
            '/pizzas/id/{id}': {
                get: {
                    summary: 'Get pizza by ID',
                    tags: ['Pizza'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Pizza found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Pizza'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'Pizza not found'
                        }
                    }
                }
            },
            '/users': {
                get: {
                    summary: 'Get all users',
                    tags: ['User'],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        '200': {
                            description: 'List of users',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/User'
                                        }
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                },
                post: {
                    summary: 'Create a new user',
                    tags: ['User'],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/User'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'User created',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/User'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                }
            },
            '/users/name/{name}': {
                get: {
                    summary: 'Get user by name',
                    tags: ['User'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'name',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'User found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/User'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'User not found'
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                }
            },
            '/users/{id}': {
                put: {
                    summary: 'Update user by ID',
                    tags: ['User'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/User'
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'User updated',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/User'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'User not found'
                        }
                    }
                }
            },
            '/orders': {
                get: {
                    summary: 'Get all orders',
                    tags: ['Order'],
                    responses: {
                        '200': {
                            description: 'List of orders',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Order'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                post: {
                    summary: 'Create a new order',
                    tags: ['Order'],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Order'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'Order created',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Order'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                }
            },
            '/orders/id/{id}': {
                get: {
                    summary: 'Get order by ID',
                    tags: ['Order'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Order found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Order'
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'Order not found'
                        }
                    }
                }
            },
            '/orders/customer_id/{customer_id}': {
                get: {
                    summary: 'Get orders by customer ID',
                    tags: ['Order'],
                    parameters: [
                        {
                            name: 'customer_id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: "List of customer's orders",
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Order'
                                        }
                                    }
                                }
                            }
                        },
                        '404': {
                            description: 'Customer not found'
                        }
                    }
                }
            },
            '/orders/id/{id}/status': {
                put: {
                    summary: 'Update order status',
                    tags: ['Order'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: {
                                            type: 'string',
                                            enum: ['pending', 'confirmed', 'cancelled', 'completed']
                                        }
                                    },
                                    required: ['status']
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Status updated'
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Order not found'
                        }
                    }
                }
            },
            '/orders/id/{id}/delivery-status': {
                put: {
                    summary: 'Update order delivery status',
                    tags: ['Order'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        delivery_status: {
                                            type: 'string',
                                            enum: ['not_started', 'in_progress', 'delivered']
                                        }
                                    },
                                    required: ['delivery_status']
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Delivery status updated'
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Order not found'
                        }
                    }
                }
            },
            '/customers': {
                get: {
                    summary: 'Get all customers',
                    tags: ['Customer'],
                    responses: {
                        '200': {
                            description: 'List of customers',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/Customer'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                post: {
                    summary: 'Create a new customer',
                    tags: ['Customer'],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Customer'
                                }
                            }
                        }
                    },
                    responses: {
                        '201': {
                            description: 'Customer created',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Customer'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        }
                    }
                }
            },
            '/customers/id/{id}': {
                get: {
                    summary: 'Get customer by ID',
                    tags: ['Customer'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Customer found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Customer'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Customer not found'
                        }
                    }
                }
            },
            '/customers/national_id/{national_id}': {
                get: {
                    summary: 'Get customer by national ID',
                    tags: ['Customer'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'national_id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Customer found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Customer'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Customer not found'
                        }
                    }
                }
            },
            '/customers/phone/{phone}': {
                get: {
                    summary: 'Get customer by phone',
                    tags: ['Customer'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'phone',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string'
                            }
                        }
                    ],
                    responses: {
                        '200': {
                            description: 'Customer found',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Customer'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Customer not found'
                        }
                    }
                }
            },
            '/customers/{id}': {
                put: {
                    summary: 'Update customer by ID',
                    tags: ['Customer'],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: {
                                type: 'string',
                                format: 'objectId'
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Customer'
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Customer updated',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Customer'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Unauthorized'
                        },
                        '404': {
                            description: 'Customer not found'
                        }
                    }
                }
            },
            '/auth/login': {
                post: {
                    summary: 'User login',
                    tags: ['Auth'],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/LoginRequest'
                                }
                            }
                        }
                    },
                    responses: {
                        '200': {
                            description: 'Login successful',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/LoginResponse'
                                    }
                                }
                            }
                        },
                        '401': {
                            description: 'Invalid credentials'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;