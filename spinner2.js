const spinner = () => {
  let delay = 200;
  let spinParts = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", " "] ;

  for (const [index, part] of spinParts.entries()) {
    setTimeout(() => {
      process.stdout.write(`\r${part}   `);
    }, delay * index);
  }
  setTimeout(() => {
  process.stdout.write("\n");
  }, delay * spinParts.length - 1);
}; 
spinner();