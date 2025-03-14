### Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

Возможности утилиты:
  - Поддержка разных входных форматов: yaml, json
  - Генерация отчета в виде plain text, stylish и json

Пример запуска:
```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

### Hexlet tests and linter status:
[![github-actions](https://github.com/WisdomQuest/frontend-project-46/actions/workflows/github-actions.yml/badge.svg)](https://github.com/WisdomQuest/frontend-project-46/actions/workflows/github-actions.yml)

[![Test Coverage](https://api.codeclimate.com/v1/badges/b3483509ed87517cea27/test_coverage)](https://codeclimate.com/github/WisdomQuest/frontend-project-46/test_coverage)

Ascinema(step 4)
[![asciicast](https://asciinema.org/a/wHepNLn0QNSfYXf9OyHoPT4HJ.svg)](https://asciinema.org/a/wHepNLn0QNSfYXf9OyHoPT4HJ)

Ascinema(step 6)
[![asciicast](https://asciinema.org/a/HxkkOQiIYxm2vO2JyCDFUd5sn.svg)](https://asciinema.org/a/HxkkOQiIYxm2vO2JyCDFUd5sn)

Ascinema(step 7)
[![asciicast](https://asciinema.org/a/tiPXgEuuDoMZAupBaOi3jpOhM.svg)](https://asciinema.org/a/tiPXgEuuDoMZAupBaOi3jpOhM)

Ascinema(step 8)
[![asciicast](https://asciinema.org/a/wVFcRWLw25eVEgI4DCbmQsqQq.svg)](https://asciinema.org/a/wVFcRWLw25eVEgI4DCbmQsqQq)

Ascinema(step 9)
[![asciicast](https://asciinema.org/a/qeVw07gBuHqRcRF10gR4dIv3g.svg)](https://asciinema.org/a/qeVw07gBuHqRcRF10gR4dIv3g)