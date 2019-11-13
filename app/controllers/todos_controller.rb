class TodosController < ApplicationController

    def create
        @project = Project.find(params[:todo][:project_id])
        @todo = @project.todos.create(todo_params)
        redirect_to root_path
    end

    def update

    end

    private
        def todo_params
            params.require(:todo).permit(:text)
        end


end
