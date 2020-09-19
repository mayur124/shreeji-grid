--------------------------------------------------------
--  File created - Saturday-September-19-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table EMP
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."EMP" 
   (	"EMPNO" NUMBER(4,0), 
	"ENAME" VARCHAR2(10 BYTE), 
	"JOB" VARCHAR2(9 BYTE), 
	"MGR" NUMBER(4,0), 
	"HIREDATE" DATE, 
	"SAL" NUMBER(7,2), 
	"COMM" NUMBER(7,2), 
	"DEPTNO" NUMBER(2,0)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.EMP
SET DEFINE OFF;
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7335,'ASMNTEFNWK','DTENCRZLH',3334,to_date('23-MAR-03','DD-MON-RR'),5426.3,373.94,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2630,'CSTFWGUHHO','FJSCZYPIT',8087,to_date('24-JAN-03','DD-MON-RR'),1622.45,454.03,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8037,'OPUHOWXCLG','TQKZVEYID',8720,to_date('05-AUG-03','DD-MON-RR'),1635.93,652.56,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5981,'UABHOSZRIO','NKCRKTUYZ',1977,to_date('03-FEB-03','DD-MON-RR'),8148.06,201.9,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5956,'RWQRDAIIPW','OCOWTUVGA',5746,to_date('04-SEP-03','DD-MON-RR'),2800.61,905.43,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7865,'HCZRWSCLWR','YSSHAYKCN',7128,to_date('11-JUL-03','DD-MON-RR'),2308.56,567.3,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6652,'FAQTZAIYZP','JATLUMONU',3436,to_date('23-FEB-03','DD-MON-RR'),7831.36,751.56,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3228,'IOFFIKKMDP','LWTKKVHHS',4956,to_date('26-SEP-03','DD-MON-RR'),8119.91,486.66,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9675,'PIYRXGWNOV','ZIKSLCFUW',5228,to_date('09-NOV-03','DD-MON-RR'),2772.01,392.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8614,'VNSWODFYWE','WGRGASLLF',2418,to_date('14-FEB-03','DD-MON-RR'),8652.42,947.73,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5656,'COXPZTVLVR','OLKCMLAVP',1716,to_date('20-DEC-03','DD-MON-RR'),5111.88,825.67,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5053,'GUGCHTEIQN','OAAEIXHAZ',3746,to_date('09-FEB-03','DD-MON-RR'),8454.9,204.55,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8430,'HHDIYYCMWW','BJAOGSEBO',9370,to_date('12-MAR-03','DD-MON-RR'),7351.02,628.38,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1928,'MSJMHGHOCJ','KGRHVMKQK',1332,to_date('17-SEP-03','DD-MON-RR'),6230,651.12,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4941,'COGHNSYTZM','UGEKAYGMP',7338,to_date('29-OCT-03','DD-MON-RR'),1464.14,274.75,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6020,'SZZXHFOOGP','TVYFHBWFM',8924,to_date('03-SEP-03','DD-MON-RR'),8596.02,476.05,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6732,'DZTOQUZUNF','FVXMHGCOC',2308,to_date('04-AUG-03','DD-MON-RR'),3796.58,107.41,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1894,'RCPNXPFVYS','LXANIUUZR',8709,to_date('03-SEP-03','DD-MON-RR'),6157.83,395.7,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9558,'TOAGELTVBI','BNKEQMXRT',9178,to_date('03-JAN-03','DD-MON-RR'),6713.97,141.77,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8950,'NTAGWIBLQP','TBAYRAAML',4820,to_date('22-SEP-03','DD-MON-RR'),9655.94,341.88,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7358,'QKTRFJVHHA','NBTUHSYVP',5109,to_date('14-FEB-03','DD-MON-RR'),3513.72,539.47,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9498,'EEITPIPEDT','YCSWSYQHC',8208,to_date('19-SEP-03','DD-MON-RR'),9383.83,743.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9736,'IAWWGTQUPC','KURLLLUMD',5272,to_date('02-SEP-03','DD-MON-RR'),1026.2,682.56,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6175,'CRGVFFXMFF','PVBGZTWJX',4617,to_date('23-APR-03','DD-MON-RR'),2641.76,450.04,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4902,'UFHKYJOKSD','RLYOGUIZQ',7861,to_date('30-AUG-03','DD-MON-RR'),4776.04,258.46,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6947,'VAWZEAAWXN','FDOLXXJGH',1294,to_date('21-OCT-03','DD-MON-RR'),3116.93,580.5,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2604,'JOEZPOCPGD','JDKOHPRXP',5736,to_date('10-JAN-03','DD-MON-RR'),2407.02,739.93,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6989,'GYUMRSVEOB','YUPCMDRPG',9679,to_date('06-JAN-03','DD-MON-RR'),2717.48,539.46,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1220,'EXOVKGVPMY','LGHYUVFIX',9998,to_date('28-AUG-03','DD-MON-RR'),8103.65,741.71,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4211,'NWMBJFRLVJ','HBYRUAZKB',8885,to_date('14-JAN-03','DD-MON-RR'),3486.17,949.84,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8901,'XEZRZFJRTB','WTLNBHITH',3068,to_date('13-AUG-03','DD-MON-RR'),6279.07,863.2,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2735,'SYWSBRGKAL','SIKBDOKEU',4592,to_date('20-MAR-03','DD-MON-RR'),8657.82,393.44,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3818,'DJCQWUBQDV','JBWQCUNPB',8604,to_date('09-AUG-03','DD-MON-RR'),2619.33,871.84,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7449,'YCQVLENWHZ','IYLHBEHCJ',3333,to_date('08-SEP-03','DD-MON-RR'),3084.22,416.32,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9170,'TWGVAEABLT','MHZOMKVSZ',3773,to_date('02-DEC-03','DD-MON-RR'),2386.72,947.09,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8194,'RLCHKFQRYW','QMJNYTSVF',4743,to_date('18-NOV-03','DD-MON-RR'),5849.16,621.34,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2054,'UJOPKHSLHJ','CLKRTJPDT',3916,to_date('10-FEB-03','DD-MON-RR'),4767.13,239.59,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5851,'OFSUSNXLUR','XUNIDFFTX',7754,to_date('11-MAR-03','DD-MON-RR'),7168.38,197.15,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3923,'ZZTZYTRIOH','KCVQXBAAG',9050,to_date('25-DEC-03','DD-MON-RR'),8872.64,643.22,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8460,'XRBHCGWNFM','UQGOUIZIW',3834,to_date('14-DEC-03','DD-MON-RR'),1035.82,374.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3164,'UDQEOSDWRV','HBZNVTTFS',1612,to_date('13-MAR-03','DD-MON-RR'),7058.52,470.22,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9840,'ICFYWXBRVS','MRZAJWHCS',3270,to_date('03-FEB-03','DD-MON-RR'),6631.87,176.13,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7460,'NPJDRSFCGW','CLQFONNUS',9748,to_date('15-JUL-03','DD-MON-RR'),2927.24,662.31,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8303,'WLFQVSTVBS','LZFXYZLFZ',3208,to_date('07-JUL-03','DD-MON-RR'),3957.56,639.22,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1963,'JVOUDAVEWO','XDFLRTHNN',8538,to_date('20-MAR-03','DD-MON-RR'),7557.91,171.05,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1181,'UCVTGZXGGU','KZSPZXGJC',4759,to_date('16-MAY-03','DD-MON-RR'),6565.48,774.34,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7679,'TNCSBRDEYK','NKZTKDIID',9281,to_date('17-JAN-03','DD-MON-RR'),7000.28,717.87,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5888,'XQGPJVTNQX','MIRBKEFYJ',7300,to_date('11-MAY-03','DD-MON-RR'),4593.6,158.06,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6246,'RGIKHLHQEI','IKNXSOIAS',6788,to_date('22-OCT-03','DD-MON-RR'),8193.05,400.13,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5796,'GMQKBTDOWP','AQGBEUGUS',2477,to_date('07-DEC-03','DD-MON-RR'),1840.46,767.01,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5743,'YBIEFKDYSY','VJEKFBYIA',7933,to_date('07-DEC-03','DD-MON-RR'),8707.48,413.04,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6313,'VKUTXBBFOZ','OGDGNPOVZ',5057,to_date('16-JUN-03','DD-MON-RR'),4204.4,864.14,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2727,'DTYWYCDUMD','XCMEEGXKQ',4023,to_date('26-AUG-03','DD-MON-RR'),7496.16,678.17,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5340,'EAFKFFUYET','PVEEAACMJ',6595,to_date('01-JUN-03','DD-MON-RR'),7335.26,866.07,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5251,'FPUCCMRHUE','GEHXTQXNY',6725,to_date('09-MAY-03','DD-MON-RR'),2699.72,354.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1313,'WZYBLMYJQA','NHRLGYXWA',5044,to_date('28-JAN-03','DD-MON-RR'),7690.98,694.12,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1049,'AHGUXDNCOT','ENZQRKEUL',9767,to_date('10-MAY-03','DD-MON-RR'),9757.53,611.37,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8102,'KYCLYYBWGF','VIQMMETRU',7060,to_date('31-JAN-03','DD-MON-RR'),9190.65,386.87,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1545,'RLLLSFUKFI','FVCOZVYAV',6514,to_date('02-FEB-03','DD-MON-RR'),2387.88,618.68,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9238,'MGQLWXWBKN','WQEVHMOBD',7342,to_date('04-JAN-03','DD-MON-RR'),5136.53,116.86,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7402,'SQHEBXZDSB','WPCQMQWBM',3236,to_date('20-MAY-03','DD-MON-RR'),3340.16,386.12,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5660,'BZICPPQEWY','QYUVECPTG',3579,to_date('24-JUN-03','DD-MON-RR'),7742.59,198.99,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4695,'CQYKSIFUPP','HRMPHOAMO',9075,to_date('21-JUN-03','DD-MON-RR'),6771.46,748.82,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4888,'USNWALYEPH','MIYWYLNXQ',3449,to_date('05-JUN-03','DD-MON-RR'),5215.49,697.64,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6259,'FUEYKVVXIM','GSTEYEWTA',4796,to_date('16-JUN-03','DD-MON-RR'),3203.53,108.25,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5873,'JEEXCKAANS','VKGUBXTTB',7266,to_date('05-JAN-03','DD-MON-RR'),9076.15,647.35,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4698,'RQSXSRDPZJ','WNFWYWFBD',1210,to_date('05-DEC-03','DD-MON-RR'),1141.23,178.59,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6693,'NBDMDQYAVW','UVBDQMBRX',5272,to_date('18-AUG-03','DD-MON-RR'),9967.1,802.31,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9690,'UESYXSBESV','JWHCQUFQI',3466,to_date('01-JAN-03','DD-MON-RR'),5981.14,409.04,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3511,'SAMOAWPIGV','KBIZFNRDR',4139,to_date('22-MAR-03','DD-MON-RR'),3393.9,337.15,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3596,'HFTQODGNFF','NYOQMZQUX',6430,to_date('27-JAN-03','DD-MON-RR'),8517.8,368.39,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9022,'UAQFVPOAGG','EOZVVMBXZ',8884,to_date('20-AUG-03','DD-MON-RR'),7072.58,546.43,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3920,'XPYHCOEBFJ','WJSVOMMRM',5991,to_date('26-JUN-03','DD-MON-RR'),3887.68,513.15,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7341,'RXMSNUFSPO','NXETCMQBY',7498,to_date('27-AUG-03','DD-MON-RR'),4451.46,958.17,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5674,'PMLDZYAPML','APJKTVYJH',9093,to_date('23-JUL-03','DD-MON-RR'),6573.06,950.49,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1742,'SKHDSKFHJX','VNTGHBANN',5721,to_date('21-FEB-03','DD-MON-RR'),8550.69,360.38,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6080,'KFQFAXPIXS','GSJGXVIVD',1948,to_date('22-AUG-03','DD-MON-RR'),1523.52,895.96,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9574,'XVLSLGQDQX','JSIVQGQCF',2053,to_date('01-JUL-03','DD-MON-RR'),2752.88,917.37,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4129,'JQQUXENHBB','XLDGMNPPK',7109,to_date('29-JAN-03','DD-MON-RR'),5705.95,173.33,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9626,'YIFDGUHGMB','MJKELRYGE',4995,to_date('28-JAN-03','DD-MON-RR'),1878.02,790.99,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2997,'SPUOSZHHZW','XDZVNNCKV',5867,to_date('31-MAY-03','DD-MON-RR'),9118.75,285.98,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5928,'WODDQWEQYA','SZUPNLXKN',4369,to_date('24-DEC-03','DD-MON-RR'),9714.25,276.97,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1371,'RZZMZZUPEX','SIVMXXWQD',7737,to_date('04-JUN-03','DD-MON-RR'),1614.4,961.38,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1038,'UIXKWKPOOC','QQVYFDYLI',6591,to_date('03-FEB-03','DD-MON-RR'),5047.15,414.48,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7983,'BQDKADBMHX','WWJJDTAJY',6963,to_date('08-JUN-03','DD-MON-RR'),2185.94,126.39,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8260,'CLJNNHUVYA','UXOQAWANM',2812,to_date('23-APR-03','DD-MON-RR'),4035.63,882.5,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9660,'VGHNPJPDBM','XOLVIGYRU',9412,to_date('28-DEC-03','DD-MON-RR'),2256.39,650.73,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9506,'FGDHMMZSSD','HBHJATDZR',2309,to_date('10-MAR-03','DD-MON-RR'),3501.63,330.98,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5217,'KGYLMSZCSZ','BYJTPKUID',9665,to_date('17-SEP-03','DD-MON-RR'),9705.11,779.12,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7091,'RCEQPJKPNC','TYFZULDIZ',6919,to_date('11-FEB-03','DD-MON-RR'),6361.25,246.48,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9526,'HUCXGADCJC','CCCKSFCUX',6329,to_date('26-SEP-03','DD-MON-RR'),4470.8,857.27,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9539,'QDQVOXQZXH','OWKOSWFWA',3862,to_date('13-MAY-03','DD-MON-RR'),5467.35,685.28,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3120,'DXGWZAXYYS','TVYUCHKQY',5433,to_date('13-DEC-03','DD-MON-RR'),4642.98,170.63,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3615,'QXXCWMETAW','ROXNXWZHR',3836,to_date('30-APR-03','DD-MON-RR'),8034.12,217.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6294,'NZVIXSNTVE','YWMCRZPKJ',8650,to_date('16-APR-03','DD-MON-RR'),9897.32,227.3,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4468,'YPUHEFWDWS','KUFSNWAQK',4756,to_date('07-AUG-03','DD-MON-RR'),6374.62,870.3,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6388,'SAEQUHZLOQ','PCYKXSWJQ',7447,to_date('15-OCT-03','DD-MON-RR'),2908.01,851.43,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6664,'BTGXPZZQPZ','XYMWPLIAW',2425,to_date('11-FEB-03','DD-MON-RR'),5023.16,589.17,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9199,'ABDKVRFTUL','NJHYBEPMB',4772,to_date('04-APR-03','DD-MON-RR'),5552.64,224.41,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2977,'KNWXRJOBVK','HKRFJKKKI',7756,to_date('22-OCT-03','DD-MON-RR'),6744.51,652.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9370,'NXPJYRDKOA','HMBTUPVUT',9618,to_date('03-MAR-03','DD-MON-RR'),4766.88,602.1,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9969,'XJEBDTDXLL','HPBRLKKPW',7816,to_date('23-DEC-03','DD-MON-RR'),2504.28,978.3,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3153,'FBSZBEYKHT','LCLHHALOC',2165,to_date('09-JUN-03','DD-MON-RR'),3353.39,977.1,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3190,'JPSDPNGCKW','BFYBHSFSS',5448,to_date('13-DEC-03','DD-MON-RR'),7791.53,449.76,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8833,'EYXKLYMORL','DQSENRQMH',4223,to_date('10-MAY-03','DD-MON-RR'),6412.5,735.47,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8421,'FAWIJCNLTN','VLIPCGASR',2709,to_date('17-NOV-03','DD-MON-RR'),2568.63,809.15,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9336,'RDZPKCMMUM','SJLQZHCJL',8181,to_date('25-APR-03','DD-MON-RR'),7844.41,398.55,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3934,'WNVDZETWDV','XUFAYNZNV',7944,to_date('29-MAR-03','DD-MON-RR'),1610.87,571.69,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2235,'BDZFYDGNQU','SKHGJYIPD',6872,to_date('29-AUG-03','DD-MON-RR'),9245.49,835.72,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1887,'XHOOVWMYQU','IXHAKUQQE',5285,to_date('02-APR-03','DD-MON-RR'),3659.68,524.8,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3720,'CYLXZIGZKO','TTZSMGPAI',6246,to_date('28-MAR-03','DD-MON-RR'),7677.69,760.5,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9670,'FIDXFHKZGZ','LVFSXAJBR',3492,to_date('19-SEP-03','DD-MON-RR'),8781.09,142.93,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3359,'QMBMAFGIHO','VFQQYQOFO',2556,to_date('31-MAY-03','DD-MON-RR'),4462.98,339.13,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9811,'CAWYPUFWVE','KGMRINOGA',8456,to_date('03-MAY-03','DD-MON-RR'),8804.63,671.83,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9233,'HGLDGIGTNX','LQZMFCTFL',2137,to_date('21-APR-03','DD-MON-RR'),3553.3,225.68,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1865,'MPATGXXJHI','CWCMPICVX',5345,to_date('27-FEB-03','DD-MON-RR'),5689.8,643.65,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3571,'MLYQDUATVL','WNFDCUFNM',1742,to_date('15-DEC-03','DD-MON-RR'),8234.81,475.49,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8615,'BIPLUTJYAY','KKRXCDTZJ',3785,to_date('07-AUG-03','DD-MON-RR'),7432.77,196.71,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4009,'JKOCIADNUO','CYNKRWKHX',9015,to_date('15-JAN-03','DD-MON-RR'),2919.88,909.43,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9897,'NWKONNELTE','ODTNMVNMJ',2753,to_date('19-APR-03','DD-MON-RR'),8149.16,999,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2506,'GGFQYAIXGY','RVOIZNTRC',3553,to_date('26-NOV-03','DD-MON-RR'),2482.5,738.53,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9342,'TGCIAXETDP','FLNNIZDGZ',3798,to_date('28-OCT-03','DD-MON-RR'),5017.15,415.07,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3325,'ELMFYSCANH','ZYXMQJOWH',1697,to_date('24-OCT-03','DD-MON-RR'),3692.27,553.21,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8832,'YBPTPBEYSO','OZPGTQWEJ',4929,to_date('24-DEC-03','DD-MON-RR'),9777.37,414.82,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7129,'DGKQTWDCNB','YOTHYFWNX',5605,to_date('23-SEP-03','DD-MON-RR'),4634.88,109.73,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4840,'BRNUHWOBIZ','JJXIAFQMN',4371,to_date('12-JUL-03','DD-MON-RR'),7181.09,885.55,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7539,'SHYSJJCEYX','LASRDVBHY',7130,to_date('04-AUG-03','DD-MON-RR'),9469.09,495.77,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5374,'ZLXGCWDTYM','NQFRFGXVJ',6582,to_date('28-DEC-03','DD-MON-RR'),2366.26,130.8,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7233,'UMBDQIFRSV','ZMGGYXJYR',9289,to_date('04-MAY-03','DD-MON-RR'),4297.65,175.26,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9467,'DHHPCMEUXY','JSFJLRHMD',5124,to_date('01-DEC-03','DD-MON-RR'),2379.3,237.3,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3244,'TBOINDQXTJ','SSUKMQUJE',4964,to_date('17-AUG-03','DD-MON-RR'),4276.42,618.27,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6949,'KUJGNGEWJV','XPPVRRHCL',9845,to_date('03-OCT-03','DD-MON-RR'),9128.82,378.28,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1657,'VIXONSXEWX','PAJVUDFQI',4405,to_date('15-MAR-03','DD-MON-RR'),2273.95,367.31,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1677,'LQLJGXTGCH','UAZCBFTNQ',9513,to_date('20-AUG-03','DD-MON-RR'),5064.07,810.6,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5486,'SUJYBPDGYI','YUPQLYFKB',3868,to_date('03-DEC-03','DD-MON-RR'),8457.05,387.6,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9663,'DZIVPCOEKU','IIMWNBPTV',6203,to_date('29-SEP-03','DD-MON-RR'),5333.3,239.32,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9653,'XSGOHCLWTR','UQSSLICHC',1943,to_date('11-JUL-03','DD-MON-RR'),9502.29,102.16,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8185,'DXXRIMYBSP','KWFAADMDY',2657,to_date('08-AUG-03','DD-MON-RR'),9505.58,445.9,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7356,'AXRHLETAQE','FPPKXLHFN',8996,to_date('03-OCT-03','DD-MON-RR'),5032.01,537.69,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6184,'KBHDXKNDVP','YTQRCITQM',8013,to_date('02-JUN-03','DD-MON-RR'),9299.45,644.39,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7693,'ILBJKWHLZZ','KIOGELTEI',2935,to_date('25-JAN-03','DD-MON-RR'),9836.98,801.94,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1215,'VZREJCITNJ','MHGUOUOIB',2580,to_date('12-DEC-03','DD-MON-RR'),3282.91,783,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5414,'UUZMXKTELT','NTZPEMIXP',8212,to_date('19-JAN-03','DD-MON-RR'),7634.92,292.07,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3626,'NJKAGONPTR','RHMCXYCAB',2973,to_date('22-MAY-03','DD-MON-RR'),7655.43,325.7,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8957,'GQZZZZUHEK','NDYHUFKFA',4941,to_date('08-SEP-03','DD-MON-RR'),1790.01,473.27,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4912,'YQALMMETAJ','AFNHXYBEK',4597,to_date('15-MAY-03','DD-MON-RR'),7164.13,228.37,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5533,'FCRCVRIEHZ','LMLYBFTNJ',4913,to_date('30-JUL-03','DD-MON-RR'),7252.22,219.13,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5039,'JLVBUOYESR','NHDMXIJLS',9529,to_date('03-APR-03','DD-MON-RR'),9782.41,217.33,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8189,'RUVYJHYPNM','DPFGIARYU',6096,to_date('14-JUN-03','DD-MON-RR'),9688.41,570.66,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2053,'ZBJVRGGBGR','ADVXTGERX',4173,to_date('01-OCT-03','DD-MON-RR'),3034.8,414.32,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1361,'KMNSYQXRVF','UBNFRTEDT',1497,to_date('23-FEB-03','DD-MON-RR'),1638.48,358.38,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8628,'PRXFEWEKNX','OPXESBXUF',4331,to_date('03-FEB-03','DD-MON-RR'),4744.55,125.92,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4049,'URKXHQXADL','XDNBBJCIR',5084,to_date('13-MAY-03','DD-MON-RR'),4463.74,852.94,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1495,'YYLGMIEKII','CMNBKRILT',4974,to_date('28-MAR-03','DD-MON-RR'),7989.3,492.55,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1013,'CWVLUWKSPV','DUYBLMTAQ',1307,to_date('12-FEB-03','DD-MON-RR'),5194.08,128.7,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4975,'UKXPEHBAVG','SHEPDYEGH',5147,to_date('13-FEB-03','DD-MON-RR'),8652.49,225.31,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1793,'MJMJGMLWHS','BZDLTLCVB',2202,to_date('27-AUG-03','DD-MON-RR'),6181.81,473.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (9272,'GXMGIENGUJ','YKTMXCZTG',3875,to_date('12-JAN-03','DD-MON-RR'),9146.73,434.82,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3180,'BIPULOASGZ','POQZDBCAJ',8911,to_date('12-DEC-03','DD-MON-RR'),7185.48,566.96,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1457,'PILRMUEIGC','ATSNZAIOZ',4420,to_date('21-JUN-03','DD-MON-RR'),1435.34,218.28,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1527,'TQFZPXHQRB','LXIEBMBPH',4281,to_date('05-JUL-03','DD-MON-RR'),1906.13,165.87,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4885,'OIGKTQCIYQ','RBRLZXDMQ',1602,to_date('14-SEP-03','DD-MON-RR'),1324.17,575.61,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4610,'DGTZDFMHYL','KIOKZPSDZ',1175,to_date('15-AUG-03','DD-MON-RR'),1432.03,462.14,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2764,'BYLFDPVSPA','KXWPQXCBK',2972,to_date('08-NOV-03','DD-MON-RR'),9726.89,559.57,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8516,'PQCICYPFFE','FHUIZOLUF',4564,to_date('01-JAN-03','DD-MON-RR'),6596.9,541.64,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8267,'EJGMAXAQPN','OFNLXVEPE',6950,to_date('02-DEC-03','DD-MON-RR'),6732.05,482.08,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6127,'WPPWPAQUAI','UCVQWUSTN',4048,to_date('02-OCT-03','DD-MON-RR'),9102.69,412.87,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6765,'KJBYGXJBZW','IPXRLPVJI',4387,to_date('22-JAN-03','DD-MON-RR'),7835.21,642.64,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8861,'IRZRNUFHZR','UWXAVAEDS',7824,to_date('20-APR-03','DD-MON-RR'),3547.1,448,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5828,'CVSVRYNTBB','PURPIZNDL',8479,to_date('10-SEP-03','DD-MON-RR'),3308.4,639.77,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1190,'MADJBZKLNS','MFSSABSJQ',6436,to_date('09-AUG-03','DD-MON-RR'),2520.7,101.63,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (7339,'GEPZOZOPWW','ESYYEOUCZ',4691,to_date('24-APR-03','DD-MON-RR'),4276.92,146.55,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3295,'NCLHLPSTFS','JPZZAJORX',6966,to_date('24-AUG-03','DD-MON-RR'),2867.38,661.44,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5508,'MQAXNBYTHA','HZPHIBONH',9246,to_date('21-NOV-03','DD-MON-RR'),2777.91,940.58,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (4025,'TXBYORTZTL','FYRRNMTQO',6076,to_date('02-APR-03','DD-MON-RR'),4248.6,490.39,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2237,'EEPOKOVFNC','WCSSTAMNY',3188,to_date('19-DEC-03','DD-MON-RR'),8832.1,591.01,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3887,'EVMDOJMYBQ','MZGPEHNCB',4458,to_date('26-MAY-03','DD-MON-RR'),3413.48,550.77,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2988,'EMUFGZLJAB','RZYIDPTJC',9662,to_date('23-APR-03','DD-MON-RR'),9404.61,367.62,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1086,'PZQJDBOIHH','JUJYHCSEY',2430,to_date('25-NOV-03','DD-MON-RR'),4084.47,894.85,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (3481,'MDJSFUFULL','PJAZSIJBT',3453,to_date('30-MAR-03','DD-MON-RR'),5032.31,727.33,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5057,'OADFHEHCDZ','BIVUDTSYE',4355,to_date('06-DEC-03','DD-MON-RR'),1054.26,465.69,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1521,'FSLDUPSAEM','XMZNWPKRS',8833,to_date('09-OCT-03','DD-MON-RR'),8473.93,167.35,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1612,'ZXQELCNUSO','JBTADHLZV',8410,to_date('15-APR-03','DD-MON-RR'),9868.53,412.19,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2167,'PWGSVMDFPB','IGRGVWAHO',7655,to_date('12-JUL-03','DD-MON-RR'),9839.62,896.72,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8649,'RNSBVKFPUX','WHPQZIQRI',4999,to_date('31-MAR-03','DD-MON-RR'),9393.61,259.97,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (5161,'HJOVZGZHKY','TQXIVKZFN',3413,to_date('13-NOV-03','DD-MON-RR'),8281.67,281.28,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6853,'YWEUXBIYXG','WUQEWEVQY',5387,to_date('15-DEC-03','DD-MON-RR'),8285.05,737.54,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6357,'WWSDTJCGFT','PWHHFHFQL',6010,to_date('02-JUL-03','DD-MON-RR'),7184.13,610.93,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (8120,'VMTVQXGVSX','XRLLEDAMR',9541,to_date('20-JUN-03','DD-MON-RR'),1725.36,524.92,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1172,'HJBLMHKSIM','YJHJBYQMO',7636,to_date('18-SEP-03','DD-MON-RR'),4379.81,467.97,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (2770,'CCNZTBVDWU','HCEQOAJVA',7580,to_date('13-OCT-03','DD-MON-RR'),3070,140.63,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6812,'YFRELWFKMO','LGIFVEGGM',5274,to_date('27-DEC-03','DD-MON-RR'),6474.02,963.59,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1059,'IOMMPLVBHE','EFXANIJSJ',5516,to_date('29-OCT-03','DD-MON-RR'),4446.48,292.13,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6682,'BMFUVAQGTE','RBIBLUTPM',3131,to_date('23-MAR-03','DD-MON-RR'),4139.54,567.1,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (6550,'YWZVZEQJBR','HLLMIBJVH',3302,to_date('31-JAN-03','DD-MON-RR'),9605.26,210.5,10);
Insert into SYSTEM.EMP (EMPNO,ENAME,JOB,MGR,HIREDATE,SAL,COMM,DEPTNO) values (1818,'HWTBTTGAJE','PVEHQVVYN',8143,to_date('21-JUL-03','DD-MON-RR'),7879.3,867.23,10);
--------------------------------------------------------
--  DDL for Index EMP_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."EMP_PK" ON "SYSTEM"."EMP" ("EMPNO") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table EMP
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."EMP" ADD CONSTRAINT "EMP_PK" PRIMARY KEY ("EMPNO")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."EMP" MODIFY ("EMPNO" NOT NULL ENABLE);
