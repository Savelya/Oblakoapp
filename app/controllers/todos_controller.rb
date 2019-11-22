class TodosController < ApplicationController

    def index
        @projects = Project.all
        @todos = @projects.todos
        respond_to do |format|
            format.json { render json: @projects }
        end
    end

    def create
        @project = Project.find(params[:todo][:project_id])
        @todo = @project.todos.create(todo_params)
        redirect_to root_path
    end

    def update
        @todo = Todo.find(params[:todo][:id])
        @todo.update(isCompleted: params[:todo][:isCompleted])
    end

    private
        def todo_params
            params.require(:todo).permit(:text)
        end


end
