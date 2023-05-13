import express, {Request, Response} from 'express';
import {EmployeeService} from '../service/EmployeeService';
import {Employee} from '@prisma/client';

const router = express.Router();

const employeeService = new EmployeeService();

router.get('/', (req: Request, res: Response) => {
    res.send('Employee Base Route');
});

/**
 * Gets all employees from the database
 *
 * @returns {Employee[]} An array of all employees
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
router.get('/all', async (req: Request, res: Response) => {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
});

/**
 * Creates an employee in the database
 *
 * @returns Created employee object
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
router.get('/create', (req: Request, res: Response) => {
    const employee = employeeService.createEmployee({
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@example.com',
        phone: '555-555-5555',
    } as Employee);
    res.json(employee);
});

/**
 * Updates an employee in the database
 *
 * @returns Updated employee object
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
router.get('/update/:id', (req: Request, res: Response) => {
    const employee = employeeService.updateEmployee(parseInt(req.params.id), {
        firstName: 'Jack',
        lastName: 'Ryan',
        email: 'jdoe@example.com',
        phone: '555-555-5555',
    } as Employee);
    res.json(employee);
});

/**
 * Deletes an employee by ID from the database
 *
 * @returns {string} A string indicating the employee was deleted
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
router.get('/delete/:id', (req: Request, res: Response) => {
    employeeService.deleteEmployee(parseInt(req.params.id)).then(r => {
        res.send(`Employee with ID:${req.params.id} deleted`);
    });
});

/**
 * Gets an employee by ID
 *
 * @returns {Employee} An employee object
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
router.get('/:id', (req: Request, res: Response) => {
    employeeService.getEmployeeById(parseInt(req.params.id)).then(r => {
        res.json(r);
    });
});

module.exports = router;
