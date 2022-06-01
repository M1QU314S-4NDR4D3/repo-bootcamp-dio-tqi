### Comandos Git/GitHub

Criar um diretório no Windows no Git Bash: 

```bash
mkdir nome-da-pasta
```

Abrir um diretório no windows no Git Bash: 

```bash
cd /Users/user/nome-projeto
```

Voltar um nível:

```bash
cd ..
```

Listar diretórios:

```bash
ls
```

Listar diretórios + pastas ocultas - adiciona-se a flag `-a`:

```bash
ls -a
```

Configurar dados do Autor:

*Importante colocar o nome de email e nome de usuário do GitHub*

```bash
git config --global user.email "seuemail@mail.com"
git config --global user.name "Seu Nome"
```

Remover configurações de autor:

```bash
git config --global --unset user.email
git config --global --unset user.name
```

**Passo a Passo…**

Iniciar o git/repositório:

```bash
git init
```

Adicionar os arquivos para staged (tanto o `.` quanto o `*` informa ao git que será adicionado todos os arquivos/pastas):

```bash
git add .
git add *
```

Realizar commits:

```bash
git commit -m “Primeiro Commit”
```

Realizar push (pode ser encontrado das duas maneiras):

```bash
git push origin main
git push origin master
```

Verificar status:

```bash
git status
```

Mover arquivos:

```bash
mv arquivo.txt ./nome-da-pasta/
```

 Verificar dados do arquivo `config`:

```bash
git config --list
```

Mais comandos:

```bash
git add README.md
git remote add origin https://github.com/M1QU314S-4NDR4D3/repo-bootcamp-dio-tqi.git
git remote -v
```

origin é um alias / nickname para  não ser necessário todo link a cada push