import {
  TASK_FLATTEN_GET_FLATTENED_SOURCE,
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} from 'hardhat/builtin-tasks/task-names';

describe('Sources', () => {
  it('do not contain cyclic dependencies', async () => {
    const sourcePaths = await hre.run(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS);

    const failures = [];

    for (const sourcePath of sourcePaths) {
      try {
        await hre.run(TASK_FLATTEN_GET_FLATTENED_SOURCE, {
          files: [sourcePath],
        });
      } catch (error) {
        // errors other than HH603 are possible
        // (such as `FileNotFoundError: File hardhat/console.sol`)
        // but these are out of scope of this test and are ignored
        if (error.toString().includes('HardhatError: HH603')) {
          failures.push(sourcePath);
        }
      }
    }

    if (failures.length > 0) {
      throw new Error(
        `cyclic dependencies found in files: ${failures.map(
          (el) => `\n${el}`,
        )}`,
      );
    }
  });
});
