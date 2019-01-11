# Create a container with the compiled asp.net core app
FROM microsoft/aspnetcore:2.0

# Create app directory
WORKDIR /app

# Copy files from the artifact staging folder on agent
COPY /expensish-api/Expensish.Api/out .

ENTRYPOINT ["dotnet", "Expensish.Api.dll"]