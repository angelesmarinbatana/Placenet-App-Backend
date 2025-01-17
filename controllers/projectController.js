const Project = require('../models/Project');
const Property = require('../models/Property');

//create
const createProject = async (req, res) => {
  try {
    const { property_id, name, description, completion_date } = req.body;
    const user_id = req.user.userId;
    const property = await Property.findOne({
      where: { property_id, user_id },
    })
    if (!property) {
      return res.status(403).json({message: 'unauthorized to create project'});
    }
    //make new project 
    const newProject = await Project.create({ 
      property_id, 
      user_id, 
      name, 
      description, 
      completion_date });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error making project', error });
  }
 };

//get one
const getProject = async (req, res) => {
 try {
   const user_id = req.user.userId; //extract from jwt payload
   const project = await Project.findOne({
    where: { project_id: req.params.projectId },
    include: {
      model: Property,
      where: { user_id },
    },
   });
   if (!project) {
    return res.status(404).json({ message: 'Project not found or not authoritzed' });
   }
   res.status(200).json(project);
 } catch (error) {
  console.error('Error:', error),
   res.status(500).json({ message: 'Error getting projects', error:error.message });
 }
};

//get all
const getAllProjects = async (req, res) => {
  try {
      const user_id = req.user.userId; 

      //const { property_id } = req.query; //property filter
      //const property = await Property.findOne({ where: { property_id, user_id }});
      const projects = await Project.findAll({
        include: { 
          model: Property,
          where: { user_id }, // Ensure only properties owned by the user are included
        },
      });
  
      res.status(200).json(projects); // Return the projects
    } catch (error) {
      res.status(500).json({ message: 'Error getting projects', error });
    }
  };

// update project
const updateProject = async (req, res) => {
 try {
  const user_id = req.user.userId;
  const project_id = req.params.projectId;
  const { property_id, name, description, completion_date } = req.body;


  console.log('project id:', project_id);//debug 
  console.log('project id:', project_id); //debug
  
  //check for missing values 
  if (!property_id || !name || !description || !completion_date) {
    return res.status(400).json ({ message: 'missing fields are required'});
  }

  const project = await Project.findOne({
    where: { project_id },
    include: {
      model: Property,
      where: { user_id },
    },
  });
  if (!project) {
    return res.status(404).json({message: 'Project not found or not authorized'});
  }
   await project.update({ property_id, name, description, completion_date });//update project 
   res.status(200).json(project);
 } catch (error) {
  console.error('error during project update:', error); //debug error 
   res.status(500).json({ message: 'Error updating project', error });
 }
};


// delete project
const deleteProject = async (req, res) => {
 try {
  const user_id = req.user.userId;
  const { project_id } = req.params;
  const project = await Project.findOne({
    where: { project_id },
    include: {
      model: Property,
      where: { user_id },
    },
  });
   if (!project) {
     return res.status(403).json({ message: 'Not authorized to delete project' });
   }
   await project.destroy();
   res.status(200).json({ message: 'Project deleted successfully' });
 } catch (error) {
   res.status(500).json({ message: 'Error deleting project', error });
 }
};


module.exports = {
 getAllProjects,
 getProject,
 createProject,
 updateProject,
 deleteProject,
};

