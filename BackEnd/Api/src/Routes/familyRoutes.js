import express from 'express';
import FamiliesController from '../Controllers/familyController.js'; // Supondo que o arquivo do controller esteja em './familiesController'

// Criando uma instância do roteador Express
const router = express.Router();

// Rota para criar uma nova família
router.post('/families', FamiliesController.createFamily);

// Rota para buscar todas as famílias
router.get('/families', FamiliesController.getAllFamilies); 

// Rota para buscar uma família pelo ID
router.get('/families/:id', FamiliesController.getFamilyById);

// Rota para atualizar uma família pelo ID
router.put('/families/:id', FamiliesController.updateFamily);

// Rota para excluir uma família pelo ID
router.delete('/families/:id', FamiliesController.deleteFamily);

// Exportando o roteador com as rotas definidas
export default router;
