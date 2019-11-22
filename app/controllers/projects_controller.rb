class ProjectsController < ApplicationController
    def index
        @projects = Project.includes(:todos)
        respond_to do |format|
            format.html # show.html.erb
            format.json { 
                @projects.each do |project|
                    render project.todos
                end
                render json: @projects
             }
           end
    end
end
