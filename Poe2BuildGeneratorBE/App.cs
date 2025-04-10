using Poe2BuildGeneratorBE.Api;
using Poe2BuildGeneratorBE.DTO;
using System;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/generate", () => GenerateBuild);


GeneratorResponse GenerateBuild()
{
    Generator Generator = new Generator();
    return Generator.GenerateBuild();
}

app.Run();
